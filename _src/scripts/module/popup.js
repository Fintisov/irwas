const modal = (trigger,
               modal,
               close,
               closeClickOverlay = true,
               timerModal = "",
) => {
    const triggerModal = document.querySelectorAll(trigger),
        closeModal = document.querySelector(`${modal} ${close}`),
        windowModal = document.querySelector(modal),
        body = document.querySelector("body");

    function showModal() {
        closeAllModal();
        if (!windowModal.classList.contains("show")) {
            windowModal.classList.add("show");
            body.style.overflow = "hidden";
            clearTimeout(showModalByTime);
        }
    }

    function hiddenModal() {
        closeAllModal();
        if (windowModal.classList.contains("show")) {
            windowModal.classList.remove("show");
        }
        body.style.overflow = "";
    }

    triggerModal.forEach(elem => {
        elem.addEventListener("click", (e) => {
            if (e.target) {
                e.preventDefault();
                showModal();
            }
        })
    });

    closeModal.addEventListener("click", () => {
        closeAllModal();
        hiddenModal();
    });

    windowModal.addEventListener("click", (e) => {
        if (e.target === windowModal && closeClickOverlay) {
            closeAllModal();
            hiddenModal();
        }
    });

    let showModalByTime = (timerModal) ? setTimeout(showModal, timerModal) : "";
}

function closeAllModal() {
    const allModal = document.querySelectorAll("[data-modal]");

    allModal.forEach(elem => {
        if (elem.classList.contains("show")) {
            elem.classList.remove("show");
        }
    })
}


export default modal;
export {closeAllModal};