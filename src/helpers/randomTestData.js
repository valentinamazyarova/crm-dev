const randomTestData = () => {
    const names = ["Алекс Гросс", "Иван Иванов", "Iren", "Katren Pirs", "Jeck Shepard", "Дарья Мороз", "Милана"];
    const phones = ["+123456789", "8913957688", "8913222288", "8913953333", "8913957555", "+123456789", "8963953788"];
    const emails = ["gross@mail.com", "ivan@mail.ru", "iren_iren@mail.ru", "KatePirs@mail.ru", "Shepard@mail.com", "Dariiii@mail.com", "Milana@mail.ru"];
    const courses = ["course-html", "course-js", "course-vue", "course-js", "course-vue", "course-php", "course-wordpress"];

    const random = (arr) => {
        return Math.floor(Math.random() * arr.length)
    };
    const randomIndex = random(names)

    const randomData = {
        name: names[randomIndex],
        phone: phones[randomIndex],
        email: emails[randomIndex],
        course: courses[randomIndex],
    }
    return randomData;
}

export default randomTestData;