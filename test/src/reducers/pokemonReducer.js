export const pokemonReducer = (state, action) => {
   switch (action.type) {
      case "name":
         return { ...state, name: action.payload };
      case "primarytype":
         return { ...state, primarytype: action.payload };
      case "secondarytype":
         return { ...state, secondarytype: action.payload };
      case "gender":
         return { ...state, gender: action.payload };
      case "image":
         return { ...state, image: action.payload };
      case "species":
         return { ...state, species: action.payload };
      case "hp":
         return { ...state, hp: action.payload };
      case "attack":
         return { ...state, attack: action.payload };
      case "defense":
         return { ...state, defense: action.payload };
      default:
         throw new Error("Unexpected action");
   }
};

export let initialFighter = {
   name: "",
   primarytype: "",
   secondarytype: "",
   gender: "",
   image: "",
   species: "",
   hp: "",
};

export let initialOpponent = {
   name: "",
   primarytype: "",
   secondarytype: "",
   gender: "",
   image: "",
   species: "",
   hp: "",
};
