const User = () => {
    return (
        <div className="left-panel__user clearfix">
            <div className="left-panel__user-photo">
                <img src={"./img/avatars/avatar128.jpg"} alt="Avatar" />
            </div>
            <div className="left-panel__user-name">Петр <br />Васильевич</div>
        </div>
    );
}

export default User;