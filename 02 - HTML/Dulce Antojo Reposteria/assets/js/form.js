function mandarPedido(){
  const swalWithBootstrapButtons = Swal.mixin({
    background: '#ffddd9',
    color: '#E97777',
    customClass: {
      confirmButton: 'btn btn-success',
      cancelButton: 'btn btn-dark',
    },
    buttonsStyling: false,
  })

  swalWithBootstrapButtons.fire({
    background: '#ffddd9',
    color: '#E97777',
    title: '¿Estas seguro que quieres enviar el pedido?',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Si, enviar',
    cancelButtonText: 'No, cancelar!',
    reverseButtons: true
  }).then((result) => {
    if (result.isConfirmed) {
      swalWithBootstrapButtons.fire(
        'Enviado!',
        'El Pedido fue enviado.',
        'success'
        )
      setTimeout(() => {
        window.location.href = "./index.html"
      }, 800)
    } else if (
      /* Read more about handling dismissals below */
      result.dismiss === Swal.DismissReason.cancel
    ) {
      swalWithBootstrapButtons.fire(
        'Cancelado',
        'El Pedido no fue enviado',
        'error'
      )
    }
  })
}