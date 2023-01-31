// [[{Col}, {Col}], [{Col}],]

const personalFields = [
  [
    {
      xs: "12",
      md: "6",
      className: "mb-3",
      title: "Primeiro Nome",
      name: "firstname",
      type: "text",
      "aria-describedby": "",
    },
    {
      xs: "12",
      md: "6",
      className: "mb-3",
      title: "Último Nome",
      name: "lastname",
      type: "text",
      "aria-describedby": "",
    },
  ],
  [
    {
      xs: "12",
      className: "mb-3",
      title: "Email",
      name: "email",
      type: "email",
      "aria-describedby": "",
    },
  ],
  [
    {
      xs: "12",
      md: "6",
      className: "mb-3",
      title: "Celular",
      name: "celphone",
      type: "number",
      "aria-describedby": "",
    },
    {
      xs: "12",
      md: "6",
      className: "mb-3",
      title: "Telefone",
      name: "telphone",
      type: "number",
      "aria-describedby": "",
    },
  ],
];

// [{InputGroup}, {InputGroup}]

const locationFields = [
  [
    {
      xs: "9",
      sm: "10",
      className: "mb-3",
      title: "Logradouro",
      name: "logradouro",
      type: "text",
      "aria-describedby": "",
    },
    {
      xs: "3",
      md: "2",
      className: "mb-3",
      title: "Número",
      name: "number",
      type: "number",
      "aria-describedby": "",
    },
  ],
  [
    {
      xs: "12",
      sm: "5",
      className: "mb-3",
      title: "Bairro",
      name: "district",
      type: "text",
      "aria-describedby": "",
    },
    {
      xs: "9",
      sm: "5",
      className: "mb-3",
      title: "Cidade",
      name: "city",
      type: "text",
      "aria-describedby": "",
    },
    {
      xs: "3",
      sm: "2",
      className: "mb-3",
      title: "Estado",
      name: "state",
      type: "text",
      "aria-describedby": "",
    },
  ],
];

const socialFields = [
  {
    className: "flex-nowrap mb-3",
    title: "Instagram",
    icon: "bi bi-instagram",
    name: "instagram",
    "aria-label": "",
    "aria-describedby": "",
  },
  {
    className: "flex-nowrap mb-3",
    title: "Linkedin",
    icon: "bi bi-linkedin",
    name: "linkedin",
    "aria-label": "",
    "aria-describedby": "",
  },
  {
    className: "flex-nowrap mb-3",
    title: "Github",
    icon: "bi bi-github",
    name: "github",
    "aria-label": "",
    "aria-describedby": "",
  },
];

export { personalFields, locationFields, socialFields };
