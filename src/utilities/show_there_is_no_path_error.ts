import { toast } from "react-toastify";

export function showThereIsNoPathError(): void {
  toast.error("Пути нет!", {
    position: "bottom-left",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: false,
    progress: undefined,
    theme: "colored",
  });
}
