

  const handleTest = (ctx) => {
  ctx.reply('Hola, qué pasa!');
  console.log(ctx.message);
  ctx.replyWithDice();
}

module.exports = handleTest;