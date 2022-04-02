document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.how__step').forEach(function(howStep) {
        howStep.addEventListener('click', function(event) {
            const path = event.currentTarget.dataset.path

            document.querySelectorAll('.block-content').forEach(function(blockContent) {
                blockContent.classList.remove('block-content-active')
            })
            document.querySelector(`[data-target="${path}"]`).classList.add('block-content-active')
        })
    })
})