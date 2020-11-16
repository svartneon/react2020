export const formReducer = (state, action) => {
   switch (action.type) {
      case "name":
         return { ...state, name: action.value };
      case "type":
         return { ...state, type: action.value };
      case "gender":
         return { ...state, gender: action.value };
      default:
         throw new Error("Unexpected action");
   }
};

export let initialForm = {
   name: "",
   type: "1",
   gender: "female",
};
