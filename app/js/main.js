import Widget from "./components/widget/widget"
import checkValidInner, { determinationCardOwnerShip } from "./service"

const widget = new Widget(".wrapper")

widget.create()
widget.addEvent(checkValidInner, determinationCardOwnerShip)
