webix.ui({
  rows: [
    {
      view: "template", // optional
      template: "Header for Column 1",
      type: "header",
      css: "myHeader",
    },
    {
      view: "datatable",
      autoheight: true,
      columns: [
        { id: "id", header: "ID" },
        { id: "name", header: "Nama" },
        {
          id: "status",
          header: "Status",
          template: function (obj) {
            return obj.status === "aktif"
              ? "<span style='color:green;'>Aktif</span>"
              : "<span style='color:red;'>Tidak Aktif</span>";
          },
        },
      ],
      data: [
        { id: 1, name: "John", status: "aktif" },
        { id: 2, name: "Doe", status: "tidak aktif" },
      ],
    },
    {
      view: "form",
      id: "loginForm", // ID form
      width: 300,
      elements: [
        { view: "template", template: "Login", type: "header", height: 50 }, // Header form
        {
          view: "text",
          label: "Username",
          name: "username",
          placeholder: "Masukkan username",
          required: true, // Username wajib diisi
        },
        {
          view: "text",
          type: "password", // Input password
          label: "Password",
          name: "password",
          placeholder: "Masukkan password",
          required: true, // Password wajib diisi
        },
      ],
    },
  ],
});

//   webix.ui({
//     rows:[
//         {   view:"template",
//             template:"Header for Column 1",
//             type:"header"
//         },
//         {   // Tambahkan datatable di sini, di dalam 'rows'
//             view: "datatable",
//             autoheight: true,
//             columns:[
//                 { id:"id", header:"ID" },
//                 { id:"name", header:"Nama" },
//                 { id:"status", header:"Status", template: function(obj){
//                     return obj.status === "aktif" ?
//                         "<span style='color:green;'>Aktif</span>" :
//                         "<span style='color:red;'>Tidak Aktif</span>";
//                     }
//                 }
//             ],
//             data:[
//                 { id:1, name:"John", status:"aktif" },
//                 { id:2, name:"Doe", status:"tidak aktif" }
//             ]
//         }
//     ]
// });
