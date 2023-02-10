import visa from "../../../layout/assets/img/visa.png"
import masterCard from "../../../layout/assets/img/mastercard.png"
import AmericanExpress from "../../../layout/assets/img/AmericanExpress.png"
import mir from "../../../layout/assets/img/mir.jpg"

export default class Widget {
	constructor(parrentSelector) {
		this.parrentDomEl = document.querySelector(parrentSelector)
		this.onClick = this.onClick.bind(this)
	}

	create() {
		this.widgetDomEl = document.createElement("div")
		this.widgetDomEl.classList.add("widget")
		this.widgetDomEl.innerHTML = `
                <ul class="widget__cards-list">
                    <li class="widget__cards-list-item" data-card="Visa">
                       <img src="${visa}" alt="">
                    </li>
                    <li class="widget__cards-list-item" data-card="MasterCard">
                        <img src="${masterCard}" alt="">
                    </li>
                    <li class="widget__cards-list-item" data-card="AmericanExpress">
                        <img src="${AmericanExpress}" alt="">
                    </li>
                    <li class="widget__cards-list-item" data-card="MIR">
                       <img src="${mir}" alt="">
                    </li>
                </ul>
                <form action="" class="widget__form">
                    <input type="text" class="widget__form-input">
                    <buttom type="submit" class="widget__form-button">Click to Validate</buttom>
                </form>
        `
		this.formDomEl = this.widgetDomEl.querySelector(".widget__form")
		this.btnDomEl = this.widgetDomEl.querySelector(".widget__form-button")
		this.itemListDomEl = this.widgetDomEl.querySelectorAll(".widget__cards-list-item")
		this.inputDomEl = this.widgetDomEl.querySelector(".widget__form-input")

		this.parrentDomEl.appendChild(this.widgetDomEl)
	}

	addEvent(validFunc, checkNumberFunc) {
		this.formDomEl.addEventListener("submit", e => {
			e.preventDefault()
			this.onClick(validFunc, checkNumberFunc)
		})

		this.btnDomEl.addEventListener("click", e => {
			e.preventDefault()
			this.onClick(validFunc, checkNumberFunc)
		})
	}

	onClick(validFunc, checkNumberFunc) {
		this.innerValueArray = [...this.inputDomEl.value.replace(/ /g, "")].map(num => +num)

		this.inputDomEl.classList.remove("mistake")

		if (validFunc(this.innerValueArray)) {
			this.showPaySystem(checkNumberFunc(this.innerValueArray))
		} else {
			this.inputDomEl.classList.add("mistake")
			this.showPaySystem(checkNumberFunc(""))
		}
	}

	showPaySystem(paySystem) {
		this.itemListDomEl.forEach(item => {
			item.classList.remove("widget__cards-list-item--active")

			if (item.dataset.card === paySystem) {
				item.classList.add("widget__cards-list-item--active")
			}
		})
	}
}
