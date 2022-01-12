export default function (Alpine) {
    Alpine.directive('validator', (el, {}, { cleanup }) => {
        const keyUp = (input, type) => {
            const types = {
                numeric: (i) => {
                    const checkNumeric = e => {
                        if (e.which >= 48 && e.which <= 57) return true
                        e.preventDefault()
                    }
                    i.addEventListener('keypress', checkNumeric)
                    cleanup(() => {
                        i.removeEventListener('keypress', checkNumeric)
                    })
                },
                decimal: (i) => {
                    const checkDecimal = e => {
                        if (e.which >= 48 && e.which <= 57) return true
                        if (e.which === 46 && !(new RegExp(/^\d*\.?\d*$/)).test(e.target.value) && e.target.value.indexOf('.') === -1 ) return true
                        e.preventDefault()
                    }
                    i.addEventListener('keypress', checkDecimal)
                    cleanup(() => {
                        i.removeEventListener('keypress', checkDecimal)
                    })
                },
                float: (i) => {
                    const checkFloat = e => {
                        if (e.which >= 48 && e.which <= 57) return true
                        if (e.which === 44 && !(new RegExp(/^\d*,?\d*$/)).test(e.target.value) && e.target.value.indexOf(',') === -1 ) return true
                        e.preventDefault()
                    }
                    i.addEventListener('keypress', checkFloat)
                    cleanup(() => {
                        i.removeEventListener('keypress', checkFloat)
                    })
                },
                email: (i) => {
                    const checkEmail = e => {
                        if (e.which >= 48 && e.which <= 57) return true // NUMERIC
                        if (e.which >= 65 && e.which <= 90) return true // CHARS MAIUS
                        if (e.which >= 97 && e.which <= 122) return true // CHARS MIN
                        if (e.which === 64 && !(new RegExp(/^\d*@?\d*$/)).test(e.target.value) && e.target.value.indexOf('@') === -1 ) return true
                        if (e.which === 46 && !(new RegExp(/^\d*\.?\d*$/)).test(e.target.value) ) return true
                        e.preventDefault()
                    }
                    i.addEventListener('keypress', checkEmail)
                    cleanup(() => {
                        i.removeEventListener('keypress', checkEmail)
                    })
                },
                string: (i) => {
                    const checkString = e => {
                        if (e.which >= 65 && e.which <= 90) return true // CHARS MAIUS
                        if (e.which >= 97 && e.which <= 122) return true // CHARS MIN
                        e.preventDefault()
                    }
                    i.addEventListener('keypress', checkString)
                    cleanup(() => {
                        i.removeEventListener('keypress', checkString)
                    })
                },
                alpha_num: (i) => {
                    const checkAlphaNum = e => {
                        if (e.which >= 48 && e.which <= 57) return true // NUMERIC
                        if (e.which >= 65 && e.which <= 90) return true // CHARS MAIUS
                        if (e.which >= 97 && e.which <= 122) return true // CHARS MIN
                        e.preventDefault()
                    }
                    i.addEventListener('keypress', checkAlphaNum)
                    cleanup(() => {
                        i.removeEventListener('keypress', checkAlphaNum)
                    })
                }
            }
            if (typeof types[type] === 'function') {
                types[type](input)
            }
        }
        el.querySelectorAll('[data-validator]').forEach(input => {
            keyUp(input, input.getAttribute('data-filter') || '')
        })
    })
}