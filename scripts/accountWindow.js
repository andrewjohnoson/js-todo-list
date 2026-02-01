// открытие/закрытие поп-апа для окошка аккаунта

export const setAccountWindowAction = () => {
    const accountWindow = document.querySelector('.popup--account');
    const accountWindowButton = document.getElementById('btn--account-window');

    accountWindowButton.addEventListener('click', (event) => {
        event.preventDefault();
        accountWindow.classList.add('active');
    });

    accountWindow.addEventListener('click', (event) => {
        if (event.target === accountWindow) {
            accountWindow.classList.remove('active');
        }
    });
};

// позицирование окна аккаунта относительно header

const calcAccountWindowRelativelyHeader = () => {
    const header = document.querySelector('header');
    const headerPosition = header.getBoundingClientRect();

    const accountWindowContent = document.querySelector('.popup--account-content');

    const accountWindowContentRight = headerPosition.left;

    accountWindowContent.style.right = `${accountWindowContentRight}px`;
};

export const setPositionOfAccountWindow = () => {
    calcAccountWindowRelativelyHeader();
    window.addEventListener('resize', calcAccountWindowRelativelyHeader);
};