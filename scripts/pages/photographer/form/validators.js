const nameEnum = {
  firstName: "prénom",
  lastName: "nom"
}

export const validator = {

  /**
   * Handle firstName and lastName inputs
   * verifity if input value is longer than 2 caracters and if it matches the given regex
   * 
   * @param {InputEvent} param0 
   */

  name({ target: nameInput }) {
    const name = nameInput.value

    nameInput.setCustomValidity("")

    if (name.length < 2) {
      nameInput.setCustomValidity(`Le ${nameEnum[nameInput.id]} doit faire au minimum 2 caractères`);
    } else if (/^[a-zÀ-ö]{2,}[a-z-À-ö\s]*$/i.test(name) === false) {
      nameInput.setCustomValidity(`Le ${nameEnum[nameInput.id]} contient des caractères invalide`);
    }

    nameInput.reportValidity()
  },

  email({ target: emailInput }) {
    const email = emailInput.value
    const emailRegex = /^[a-zA-Z]+[a-z-A-Z.-_\d]+?@[a-zA-Z]+\.[a-z]{2,4}$/;

    emailInput.setCustomValidity("")

    if (emailRegex.test(email) === false) {
      emailInput.setCustomValidity("Format de l'email incorrect")
    }

    emailInput.reportValidity()
  },

  message({ target: messageInput }) {
    const message = messageInput.value

    messageInput.setCustomValidity("")

    if (message.length < 20) {
      messageInput.setCustomValidity("Votre message doit être supérieur à 20 caractères")
    } else if (message.length >= 150) {
      messageInput.setCustomValidity("Votre message ne peut pas dépasser 150 caractères")
      messageInput.value = messageInput.value.slice(0, -1)
    }

    messageInput.reportValidity()
  }
}

