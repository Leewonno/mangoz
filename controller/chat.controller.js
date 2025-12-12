const jwt = require('jsonwebtoken');
const models = require('../database/db');
const { Op } = require('sequelize');
let room;
let chatRoom;
let userID;
let Rname;
let chatInfo;

exports.chat = async (req, res) => {
  room = await req.query.room;
  if (!req.cookies.token) {
    res.send("<script>alert('로그인이 필요합니다.');window.close()</script>");
    // res.redirect('signin');
  } else {
    try {
      userID = jwt.decode(req.cookies.token).userid;
      chatRoom = await models.ChatRoom.findOne({
        where: { name: room },
      });
      res.locals.layout = 'layouts/layout2';
    } catch (error) {
      console.log(error);
    }
    const RoomN = await models.ChatRoom.findOne({ where: { name: room } });
    if (!RoomN) {
      res.send("<script>alert('nodata');history.back()</script>");
    } else {
      res.render('chat', { data: chatRoom });
    }
  }

  // const n = window.localStorage.getItem('token');
};

exports.chatP = async (req, res) => {
  Rname = req.cookies.token;
  Rname = jwt.decode(Rname).userid;
  res.send({ userid: Rname, roomName: chatRoom.name, member: chatRoom.member, cover_img: chatRoom.cover_img });
};

exports.chat_upload_render = (req, res) => {
  res.render('chat_upload');
};

exports.chat_upload = async (req, res) => {
  try {
    const chatRoom = await models.ChatRoom.create({
      name: req.body.name,
      tag: req.body.tag,
      cover_img: req.body.cover_img,
    });
  } catch (error) {
    console.log(error);
  }
};

exports.connection = (io, socket) => {
  //채팅방 목록 보내기
  //채팅방 만들기 생성
  socket.on('create', async () => {
    //join(방이름) 해당 방이름으로 없다면 생성. 존재하면 입장
    //socket.rooms에 socket.id값과 방이름 확인가능
    socket.join(room);
    //socket은 객체이며 원하는 값을 할당할 수 있음
    socket.room = room;
    socket.user = userID;
    let chat_member = await models.Chat_member.findOne({ where: { userid: userID, chatroom_id: chatRoom.id } });
    if (!chat_member) {
      await models.Chat_member.create({
        userid: userID,
        chatroom_id: chatRoom.id,
      });
      const chatRoomMember = await models.ChatRoom.findOne({ where: { id: chatRoom.id } });
      chatRoomMember.member += 1;
      await chatRoomMember.save();
    }
    socket.to(socket.room).emit('notice', `${socket.user}님이 입장하셨습니다`, socket.user);
    chatInfo = await models.Chat.findAll({
      raw: true,
      where: { chatroom_id: chatRoom.id },
      order: [['create_date', 'ASC']],
    });
    for (let i = 0; i < chatInfo.length; i++) {
      socket.emit('newMessage', chatInfo[i].content, chatInfo[i].userid);
    }
  });

  socket.on('sendMessage', async (message) => {
    const userInfo = await models.Profile.findOne({
      where: { userid: socket.user },
    });

    if (message.message) {
      const userChat = await models.Chat.create({
        chatroom_id: chatRoom.id,
        userid: socket.user,
        content: message.message,
        type: 'u',
        nickname: userInfo.nickname,
      });
    }
    io.to(socket.room).emit('newMessage', message.message, socket.user);
  });

  socket.on('disconnect', async () => {
    socket.leave(socket.room);
  });
  socket.on('deleteInfo', async () => {
    await models.Chat_member.destroy({
      where: { userid: userID, chatroom_id: chatRoom.id },
    });
    const chatRoomMember = await models.ChatRoom.findOne({
      where: { id: chatRoom.id },
    });
    chatRoomMember.member -= 1;
    await chatRoomMember.save();
  });
};

exports.chat_tag = async (req, res) => {
  let chat_tagArray = [];
  const chat_tag = await models.ChatRoom.findAll({
    where: { tag: { [Op.like]: `%${req.body.tag}%` } },
    order: [['member', 'DESC']],
    limit: 5,
  });
  for (let i = 0; i < chat_tag.length; i++) {
    chat_tagArray.push({ name: chat_tag[i].name, cover_img: chat_tag[i].cover_img, member: chat_tag[i].member });
  }
  res.send({ tag: chat_tagArray });
};
