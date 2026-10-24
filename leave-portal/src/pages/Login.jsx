import React from "react";
function Login(){
return (
<div className="
min-h-screen 
flex 
items-center 
justify-center
bg-gray-100
p-5
">
<div className="
bg-white
rounded-3xl
shadow-lg
p-6
w-full
max-w-md
">
<h1 className="
text-2xl
font-bold
text-center
mb-6
">
Employee Login
</h1>
<input
className="
w-full
border
rounded-xl
p-3
mb-4
outline-none
"
placeholder="Staff ID"
/>
<input
type="password"
className="
w-full
border
rounded-xl
p-3
mb-5
outline-none
"
placeholder="Password"
/>
<button
className="
w-full
bg-blue-600
text-white
p-3
rounded-xl
font-semibold
"
>
Login
</button>
</div>
</div>
)
}
export default Login;