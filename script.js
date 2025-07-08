function setProduct(name) {
  document.getElementById("product").value = name;
}

function sendWhatsApp() {
  const name = document.getElementById("username").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const wilaya = document.getElementById("wilaya").value.trim();
  const address = document.getElementById("address").value.trim();
  const product = document.getElementById("product").value.trim();
  const notes = document.getElementById("notes").value.trim();

  if (!name || !phone || !wilaya || !address || !product) {
    alert("يرجى ملء جميع الحقول الأساسية!");
    return;
  }

  const message = `مرحبًا، أرغب في طلب:
🍰 نوع الطلب: ${product}
👤 الاسم: ${name}
📱 الهاتف: ${phone}
📍 الولاية: ${wilaya}
🏠 العنوان: ${address}
📝 ملاحظات: ${notes}`;

  const encodedMessage = encodeURIComponent(message);
  const phoneNumber = "213779979721"; // لا تبدأ بـ +
  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  window.open(whatsappURL, '_blank');
}