'use strict';
var CLOUD_WIDTH = 420;
var CLOUD_HEGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var FONT_GAP = 40;
var TEXT_WIDTH = 50; //ширина текста
var BAR_HEIGHT = 150;
var BAR_WIDTH = 40; // ШИРИНА колонки
// функция отрисовки облака.
var renderCloud = function(ctx, x, y, color){
	ctx.fillStyle = color;
	ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEGHT);
	ctx.font = '16px PT Mono';
	ctx.fillStyle = '#000';
    ctx.fillText('Ура! Вы победили!', 125, 40);
    ctx.fillText('Список результатов:', 125, 60);
}
window.renderStatistics = function(ctx) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.fillStyle = "rgba(255, 0, 0, 1)";
  
  ctx.fillText('Вы', CLOUD_X + FONT_GAP, 260);
  ctx.fillRect(CLOUD_X + FONT_GAP, 20, BAR_WIDTH, (100)*-1);

  ctx.fillText('Кекс', CLOUD_X + FONT_GAP +(TEXT_WIDTH + FONT_GAP), 260);
  ctx.fillRect(CLOUD_X + FONT_GAP +(TEXT_WIDTH + FONT_GAP), 90, BAR_WIDTH, 150);

  ctx.fillText('Катя', CLOUD_X + FONT_GAP +(TEXT_WIDTH + FONT_GAP)*2, 260);
  ctx.fillRect(CLOUD_X + FONT_GAP +(TEXT_WIDTH + FONT_GAP)*2, 90, BAR_WIDTH, 150);

  ctx.fillText('Игорь', CLOUD_X + FONT_GAP +(TEXT_WIDTH + FONT_GAP)*3, 260);
  ctx.fillRect(CLOUD_X + FONT_GAP +(TEXT_WIDTH + FONT_GAP)*3, 90, BAR_WIDTH, 150);
};