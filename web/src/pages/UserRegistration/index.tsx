export function UserRegistration() {
    return (
        <form action="" method="post">
            <label htmlFor="firstname">First name </label>
            <input type="text" placeholder="Enter your first name" id="firstname" />
            <label htmlFor="lastname">Last name </label>
            <input type="text" placeholder="Enter your last name" id="lastname" />
            <label htmlFor="email">Email </label>
            <input type="email" placeholder="Enter your e-mail" id="email" />
            <label htmlFor="password">Password </label>
            <input type="password" placeholder="password" id="password" />
            <label htmlFor="confirm-password">Confirm Password </label>
            <input type="password" placeholder="password" id="confirm-password" />
            <button type="submit">Signup</button>
        </form>
    );
}