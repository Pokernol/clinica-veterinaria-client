document.addEventListener('DOMContentLoaded', function () {
  const modalContainer = document.createElement('div');
  modalContainer.id = 'global-modal';
  document.getElementById('modal').appendChild(modalContainer);
});

function showModal(
  title,
  content,
  buttonText = 'OK',
  callback = null,
  initCallback = null
) {
  const modalHTML = `
		<div class="modal fade" id="dynamicModal" tabindex="-1" aria-labelledby="dynamicModalLabel" aria-hidden="true">
			<div class="modal-dialog modal-dialog-centered">
				<div class="modal-content">
					<div class="modal-header">
						<h5 class="modal-title" id="dynamicModalLabel">${title}</h5>
						<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
					</div>
					<div class="modal-body">
						${content}
					</div>
					<div class="modal-footer">
						<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
						<button type="button" class="btn btn-primary" id="modalActionButton">${buttonText}</button>
					</div>
				</div>
			</div>
		</div>
	`;

  document.getElementById('global-modal').innerHTML = modalHTML;

  const modalElement = new bootstrap.Modal(
    document.getElementById('dynamicModal')
  );
  modalElement.show();

  document
    .getElementById('modalActionButton')
    .addEventListener('click', function () {
      if (callback) callback();
      modalElement.hide();
    });

  if (initCallback) initCallback();
}

export { showModal };
