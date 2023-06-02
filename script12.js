
      const toggleBtn = document.querySelector('.toggle_btn')
      const toggleBtnIcon = document.querySelector('.toggle_btn i')
      const dropDownMenu = document.querySelector('.dropdown_menu')
      const text = document.querySelector('.sec-text');

      toggleBtn.onclick =function () {
        dropDownMenu.classList.toggle('open')
        const isOpen = dropDownMenu.classList.contains('open')

        toggleBtnIcon.classList = isOpen
        ? 'fa-solid fa-xmark'
        : 'fa-solid fa-bars'
      }

      const textLoad = () => {
        setTimeout(() => {
          text.textContent = 'Full Stack Web Developer';
        }, 0);
        setTimeout(() => {
          text.textContent = 'MERN Stack Developer';
        }, 4000);
      }

      textLoad();
      setInterval(textLoad, 8000);
    