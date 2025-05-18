function submitComment() {
  const nama = document.getElementById("nama").value.trim();
  const komentar = document.getElementById("komentar").value.trim();
  const notif = document.getElementById("notif");

  if (!nama || !komentar) {
    alert("Mohon isi nama dan ucapan terlebih dahulu.");
    return;
  }

  const commentId = 'comment-' + Date.now();

  const commentHTML = `
    <div class="comment" id="${commentId}">
      <p><strong>${nama}:</strong> ${komentar}</p>
      <div class="reply-box" id="reply-${commentId}"></div>
      <div class="reply-form">
        <textarea rows="2" placeholder="Balasan dari pengantin..." id="reply-input-${commentId}"></textarea>
        <button onclick="submitReply('${commentId}')">Balas</button>
      </div>
    </div>
  `;

  document.getElementById("comment-section").insertAdjacentHTML('beforeend', commentHTML);

  // Reset form
  document.getElementById("nama").value = '';
  document.getElementById("komentar").value = '';

  // Notifikasi
  notif.style.display = 'block';
  setTimeout(() => {
    notif.style.display = 'none';
  }, 3000);
}

function submitReply(commentId) {
  const textarea = document.getElementById(`reply-input-${commentId}`);
  const replyText = textarea.value.trim();
  if (!replyText) {
    alert("Balasan tidak boleh kosong.");
    return;
  }

  const replyHTML = `<div class="reply"><strong>Pengantin:</strong> ${replyText}</div>`;
  document.getElementById(`reply-${commentId}`).innerHTML = replyHTML;
  textarea.value = '';
}
