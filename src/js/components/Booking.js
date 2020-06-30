import { select, templates } from '../settings.js';
import { utils } from '../utils.js';
import AmountWidget from './AmountWidget.js';
import DatePicker from './DatePicker.js';

class Booking {
  constructor(element) {
    const thisBooking = this;
    console.log('element', element);

    thisBooking.render(element);
    thisBooking.initWidgets();
  }

  
  render(wrapper) {
    const thisBooking = this;

    const generatedHTML = templates.bookingWidget();

    thisBooking.dom = {};
    thisBooking.dom.wrapper = wrapper;
    thisBooking.generatedDOM = utils.createDOMFromHTML(generatedHTML);
    thisBooking.dom.peopleAmount = thisBooking.generatedDOM.querySelector(
      select.booking.peopleAmount
    );
    thisBooking.dom.hoursAmount = thisBooking.generatedDOM.querySelector(
      select.booking.hoursAmount
    );  
    thisBooking.dom.datePicker = thisBooking.generatedDOM.querySelector(
      select.widgets.datePicker.wrapper
    );
    thisBooking.dom.wrapper.appendChild(thisBooking.generatedDOM);
  }

  initWidgets() {
    const thisBooking = this;

    thisBooking.peopleAmount = new AmountWidget(thisBooking.dom.peopleAmount);
    thisBooking.hoursAmount = new AmountWidget(thisBooking.dom.hoursAmount);
    thisBooking.datePicker = new DatePicker(thisBooking.dom.datePicker);
  
  }
}

export default Booking;
