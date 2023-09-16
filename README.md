# Course-Registration

---

## Q.1 Add at least 3 Project features 

Here is the 3 feature of this Project:


* This project has a card section. Each card can only be added to the cart section once. If you try to select it multiple times, it will trigger an alert with a React toast.

* In the cart section, there is a total credit hour. After each card selection, the credit hour will be added to the total credit hour. You can't add more than 20 hours, and if you attempt to cross 20 hours, it will display a React toast.

* There is another section called Credit Hours Remaining that initially displays 20 hours. After selecting a card, the remaining hours will decrease by the card's credit hour.

---

## Q.2 Discuss how you managed the state in your assignment project.

I use `useState` in my project. How I use `useState` given below step by step:

First, I import `useState` from react.

    `import { useState } from "react";`

Second, Initialize state at the top of the function component. Then destructuring the returned values from `useState`. There is two values current state and a function that is used to update our state.

    ```import { useState } from "react";

    function FavoriteColor() {
    const [color, setColor] = useState("");
    }```

Third, We set the initial state like empty array, empty string etc.

`const [color, setColor] = useState("");`