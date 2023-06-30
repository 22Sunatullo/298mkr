interface TypeApartments {
  id: number;
  img: string;
}

interface TypeTable {
  id: number;
  title: string;
}

export const ApartamentTable: TypeTable[] = [
  { 
    id: 1, 
    title: "1-комнатные",
  },
  { 
    id: 2, 
    title: "2-комнатные",
  },
  { 
    id: 3, 
    title: "3-комнатные",
  },
];

export const Apartaments: TypeApartments[] = [
    { 
      id: 1, 
      img: "/assets/apartment/apartment1.png",
    },
    { 
      id: 2, 
      img: "/assets/apartment/apartment1.png",
    },
    { 
      id: 3, 
      img: "/assets/apartment/apartment1.png",
    },
  ];
  