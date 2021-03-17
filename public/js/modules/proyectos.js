import Swal from "sweetalert2";
import axios from "axios";

const deleteBtn = document.querySelector("#eliminar-proyecto");

if (deleteBtn) {
  deleteBtn.addEventListener("click", (evt) => {
    const urlProyecto = evt.target.dataset.proyectoUrl;

    Swal.fire({
      title: "¿Deseas borrar este proyecto?",
      text: "Un proyecto eliminado no se puede recuperar",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "¡Si, borrar!",
      cancelButtonText: "No, Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        const url = `${location.origin}/proyectos/${urlProyecto}`;

        axios
          .delete(url, { params: { urlProyecto } })
          .then((response) => {
            if (response.status === 200) {
              Swal.fire("¡Eliminado!", response.data, "success");
              setTimeout(() => (window.location.href = "/"), 3000);
            }
          })
          .catch(() => {
            Swal.fire({
              icon: "error",
              title: "Hubo un error",
              text: "No se pudo eliminar el proyecto",

            });
          });
      }
    });
  });
}

export default deleteBtn;
