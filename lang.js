// Английский — всегда язык по умолчанию при новом заходе.
// RU включается только явным кликом и живёт в пределах текущей сессии
// (переходы между страницами сохраняют выбор, новый визит снова открывает EN).
(function () {
  try { localStorage.removeItem('lang'); } catch (e) {} // подчистить старый выбор

  var fromUrl = new URLSearchParams(location.search).get('lang');
  var session = null;
  try { session = sessionStorage.getItem('lang'); } catch (e) {}

  var lang = 'en';
  if (fromUrl === 'ru' || fromUrl === 'en') lang = fromUrl;
  else if (session === 'ru') lang = 'ru';

  document.documentElement.setAttribute('data-lang', lang);

  window.setLang = function (l) {
    document.documentElement.setAttribute('data-lang', l);
    try { sessionStorage.setItem('lang', l); } catch (e) {}
  };
})();
