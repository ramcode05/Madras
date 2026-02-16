document.addEventListener('DOMContentLoaded', () => {
    const HARDCODED_DATA = {
        rollNumber: '25F3001889',
        hallTicketNumber: '25T3S5DS25F3001889',
        dob: '2007-07-05', // HTML date picker format yyyy-mm-dd
        month: 'december'
    };

    const loginView = document.getElementById('login-view');
    const resultView = document.getElementById('result-view');
    const resultForm = document.getElementById('result-form');
    const errorMessage = document.getElementById('error-message');
    const resultTitle = document.getElementById('result-title');
    const greetingText = document.getElementById('greeting-text');
    const currentDateText = document.getElementById('current-date-text');
    const cardDateText = document.getElementById('card-date-text');
    const backBtn = document.getElementById('back-btn');
    const printBtn = document.getElementById('print-btn');
    const resultIframe = document.getElementById('result-iframe');

    // Set Greeting and Dates
    const setDynamicData = () => {
        const now = new Date();
        const hour = now.getHours();
        let greeting = '';

        if (hour < 12) greeting = 'Good Morning';
        else if (hour < 17) greeting = 'Good Afternoon';
        else greeting = 'Good Evening';

        const displayGreeting = `${greeting}, JANUARY 2026 TERM`;
        const dateOptions = { day: '2-digit', month: 'short', year: 'numeric' };
        const formattedDate = now.toLocaleDateString('en-GB', dateOptions);

        greetingText.textContent = displayGreeting;
        currentDateText.textContent = formattedDate;
        cardDateText.textContent = formattedDate;
    };

    setDynamicData();

    // Form Submission
    resultForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const roll = document.getElementById('rollNumber').value.trim();
        const hallTicket = document.getElementById('hallTicketNumber').value.trim();
        const dob = document.getElementById('dob').value;
        const month = document.getElementById('month').value;

        if (
            roll === HARDCODED_DATA.rollNumber &&
            hallTicket === HARDCODED_DATA.hallTicketNumber &&
            dob === HARDCODED_DATA.dob &&
            month === HARDCODED_DATA.month
        ) {
            // Success
            errorMessage.style.display = 'none';
            loginView.style.display = 'none';
            resultView.style.display = 'flex';
            resultTitle.textContent = `Result: ${roll}`;
        } else {
            // Error
            errorMessage.textContent = 'Invalid Details. Please check your Roll Number, Hall Ticket Number, Date of Birth, and Month of Exam.';
            errorMessage.style.display = 'block';
        }
    });

    // Back Button
    backBtn.addEventListener('click', () => {
        resultView.style.display = 'none';
        loginView.style.display = 'flex';
        resultForm.reset();
        errorMessage.style.display = 'none';
    });

    // Print Button
    printBtn.addEventListener('click', () => {
        if (resultIframe) {
            resultIframe.contentWindow.focus();
            resultIframe.contentWindow.print();
        }
    });
});
