$(document).ready(() => {
  // Initialize variables
  const $homePageButton = $('.navbar-item#home-page-button');
  const $resumePageButton = $('.navbar-item#resume-page-button');
  const $loginPageButton = $('.navbar-item#login-page-button');
  const $navbarBurger = $('.navbar-burger');
  const $navbarMenu = $('.navbar-menu');

  // Event listener to toggle navbar burger
  $navbarBurger.on('click', () => {
    $navbarBurger.toggleClass("is-active");
    $navbarMenu.toggleClass("is-active");
  });
});
