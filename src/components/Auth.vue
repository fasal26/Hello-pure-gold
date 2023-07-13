<template>
    <div class="baba-flex-col baba-svc-container" id="services">
      <!-- <h2 class="baba-flex">Login / Signup</h2> -->
      <div class="container">
            <h2>Login</h2>
            <form>
            <div class="form-group">
                <label for="username">Username:</label>
                <input type="text" id="username" placeholder="Enter your username">
            </div>
            <div class="form-group">
                <label for="password">Password:</label>
                <input type="password" id="password" placeholder="Enter your password">
            </div>
            <button type="submit">Login</button>
            </form>
        </div>
    </div>
</template>

<style scoped>

.container {
    width: 230px;
    margin: 0 auto;
    padding: 20px;
    background-color: #fff;
    box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
    border-radius: 15px;
}

h2 {
  text-align: center;
  margin-bottom: 20px;
}

.form-group {
  margin-bottom: 20px;
}

label {
  display: block;
  font-weight: 500;
  margin-bottom: 5px;
}

input[type="text"],
input[type="password"] {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  display: block;
  width: 100%;
  padding: 10px;
  background-color: var(--color-bg);
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #c8841d;
}

</style>