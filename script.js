document.addEventListener('DOMContentLoaded', () => {
    const scheduleContainer = document.getElementById('schedule-container');
    const searchInput = document.getElementById('searchInput');
    let talks = [];

    fetch('talks.json')
        .then(response => response.json())
        .then(data => {
            talks = data;
            renderSchedule(talks);
        });

    searchInput.addEventListener('input', () => {
        const searchTerm = searchInput.value.toLowerCase();
        const filteredTalks = talks.filter(talk => 
            talk.category.some(cat => cat.toLowerCase().includes(searchTerm))
        );
        renderSchedule(filteredTalks);
    });

    function renderSchedule(talksToRender) {
        scheduleContainer.innerHTML = '';
        let currentTime = new Date();
        currentTime.setHours(10, 0, 0, 0); // Event starts at 10:00 AM

        talksToRender.forEach((talk, index) => {
            if (index === 3) {
                const breakElement = document.createElement('div');
                breakElement.className = 'break';
                const breakTime = new Date(currentTime.getTime() + 10 * 60000);
                breakElement.innerHTML = `<h2>Lunch Break</h2><div class="time">${formatTime(breakTime)} - ${formatTime(new Date(breakTime.getTime() + 60 * 60000))}</div>`;
                scheduleContainer.appendChild(breakElement);
                currentTime.setTime(breakTime.getTime() + 60 * 60000);
            }

            const talkElement = document.createElement('div');
            talkElement.className = 'talk';

            const talkTime = new Date(currentTime.getTime());
            const endTime = new Date(talkTime.getTime() + talk.duration * 60000);

            talkElement.innerHTML = `
                <div class="time">${formatTime(talkTime)} - ${formatTime(endTime)}</div>
                <h2>${talk.title}</h2>
                <div class="speakers">By: ${talk.speakers.join(', ')}</div>
                <p>${talk.description}</p>
                <div class="category">
                    ${talk.category.map(cat => `<span>${cat}</span>`).join('')}
                </div>
            `;
            scheduleContainer.appendChild(talkElement);

            currentTime.setTime(endTime.getTime() + 10 * 60000); // 10 minute break
        });
    }

    function formatTime(date) {
        return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    }
});
