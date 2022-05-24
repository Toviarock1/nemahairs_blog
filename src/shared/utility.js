import emailjs from '@emailjs/browser'

export const getPostedDate = (publishedAt) => {
    let getDate;
    let month = [];
    let splitgetDate;
    let newDate;
    if (publishedAt) {
        //get date into array with two parts and take only the first which contains the date
        getDate = publishedAt.split(/[a-z]/i)[0];
        //slpit the date into 3 arrays that has the month, day, year
        splitgetDate = getDate.split(/\W/);
        //check the month to replace the month number with the month name
        month[0] = "January";
        month[1] = "January";
        month[2] = "February";
        month[3] = "March";
        month[4] = "April";
        month[5] = "May";
        month[6] = "June";
        month[7] = "July";
        month[8] = "August";
        month[9] = "September";
        month[10] = "October";
        month[11] = "November";
        month[12] = "December";
        //arrange the date like this 03 november 2021
        newDate = `${splitgetDate[2]} ${month[splitgetDate[1]]} ${splitgetDate[0]}`;
    }
    //return the new Date (03 november 2021)
    return newDate;
}

export const sendEmail = (e, setDisableBtn) => {
    e.preventDefault();
    setDisableBtn(true);
    emailjs
        .sendForm(
            "nemahairs_contact_form",
            "template_9v0qdk7",
            e.target,
            "9KGUBaheK_829zzHp"
        )
        .then(
            (result) => {
                setDisableBtn(false);
                e.target.reset();
            },
            (error) => {
                console.log(error.text);
                setDisableBtn(false);
            }
        );
};