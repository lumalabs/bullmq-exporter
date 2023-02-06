import ejs from "ejs";

const loginPage = `
<style>
    body {
        background: #454b52;
        font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
        font-weight: 400;
        line-height: 1.25em;
        margin: 0;
        font-size: 24px;
        color: #454b52;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    .login-page {
        width: 460px;
        padding: 8% 0 0;
        margin: auto;
    }
    .form {
        position: relative;
        z-index: 1;
        background: #FFFFFF;
        max-width: 360px;
        margin: 0 auto 100px;
        padding: 45px;
        text-align: center;
        box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
    }
    .form input {
        font-family: inherit;
        outline: 0;
        background: #f2f2f2;
        width: 100%;
        border: 0;
        margin: 0 0 15px;
        padding: 15px;
        box-sizing: border-box;
        font-size: 14px;
    }
    .form button {
        font-family: inherit;
        text-transform: uppercase;
        outline: 0;
        background: #e20074;
        width: 100%;
        border: 0;
        padding: 15px;
        color: #FFFFFF;
        font-size: 14px;
        -webkit-transition: all 0.3 ease;
        transition: all 0.3 ease;
        cursor: pointer;
    }
    .form button:hover,.form button:active,.form button:focus {
        background: hsl(217, 22%, 28%);
    }
    .form .message {
        margin: 15px 0 0;
        color: #b3b3b3;
        font-size: 12px;
    }
    .form .message a {
        color: hsl(217, 22%, 24%);
        text-decoration: none;
    }

    .message.error {
        color: #EF3B3A;
    }

</style>

<div class="login-page">
    <div class="form">
        <form class="login-form" method="post" action="<% loginPath %>">
            <input type="text" name="username" placeholder="Username"/>
            <input type="password" name="password" placeholder="Password"/>
            <button>Login</button>
            <% if (invalid) { %>
                <p class="message error">Invalid username or password.</p>
            <% } %>
        </form>
    </div>
</div>
`;

export function renderLoginPage(invalid: boolean, loginPath: string) {
  return ejs.render(loginPage, { invalid: invalid, loginPath: loginPath });
}