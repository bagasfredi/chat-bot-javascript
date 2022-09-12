console.log('Hello World!');

const chatBox = document.getElementById("chat-box");
const chatForm = document.getElementById("chat-form");
const chatInput = document.getElementById("chat-input");

function createChat(from, message) {
	const chat = document.createElement("span");
	chat.innerHTML = message;

	if (from === "bot") {
		chat.classList.add("bot");
	} else if (from === "user") {
		chat.classList.add("user");
	}

	chatBox.appendChild(chat);
	chatBox.scrollTo(0, chatBox.scrollHeight);
}

function botReply(message) {
	const replies = {
		halo: "Halo juga!",
		nanya: "Boleh, mau nanya apa?",
		kenalan: "Kenalkan nama saya cika, Diciptakan dengan cinta",
		makanan: "(•‿•)",
		minuman: "(•‿•)",
		bye: "Sampai jumpa kembali!",
		hei: "iya",
		hello: "Hallo👋, Aku adalah cika robot pemersatu bangsa karya anak bangsa di buat di bangsa Indonesia siap membantu kamu dengan perintah-perintah yg tersedia",
		hallo: "Hallo👋, Aku adalah cika robot pemersatu bangsa karya anak bangsa di buat di bangsa Indonesia siap membantu kamu dengan perintah-perintah yg tersedia",
		woy: "Yang sopan dong😠",
		kontol: "Don't say dirty",
		anjing: "Don't say dirty",
		tujuan: "Tujuan cika diciptakan adalah untuk mengasah kemampuan pembuat untuk jauh lebih baik lagi:)",
		asal: " Saya dibuat tgl 8 Sept 2022",
		pantun: "Hujan di Solo, banjir di Semarang Kasihan deh lo, masih sendiri sampai sekarang",
		lucu: "Kucing ini lucu, Meoww😸",
		cringe: "😭😭",
		tertawa: "HaHaHaHa😂",
		ketawa: "HaHaHaHa😂",
		nangis: "😭",
		menangis: "😭😭",
		sayang: "Apa sayang",
		ayang: "Iya ayang,ada apa?",
		ngapain: "duduk ajh",
		sus: "SUS??🤨🤨",
		hai: "Hallo👋, Aku adalah cika robot pemersatu bangsa karya anak bangsa di buat di bangsa Indonesia siap membantu kamu dengan perintah-perintah yg tersedia",
		nama: "Nama ku Cika ❤️",
		love: "❤️",
		love2: "❤️❤️",
		love3: "❤️❤️❤️",
		love4: "❤️❤️❤️❤️",
		love5: "❤️❤️❤️❤️❤️",
		love6: "❤️❤️❤️❤️❤️❤️",
		love6: "Dah ah Capek:(",
		emoji: "😀😃😄😁😆😅😂🤣😭😗😙😚😘🥰😍🤩🥳🤗🙃🙂☺️😊😏😌😉🤭😶😐😑😔😋😛😝😜🤪🤔🤨🧐🙄😒😤😠😡🤬☹️🙁😕😟🥺😳😬🤐🤫😰😨😧😦😮😯😲😱🤯😢😥😓😞😖😣😩😫🤤😴😪🌛🌜🌚🌝🌞🤢🤮🤧🤒🤕🥴😵🥵🥶😷😇🤠🤑😎🤓🤥🖕",
		ok: "YES OK!",
		oke: "YES OKE!",
	};
	let words = message.split(" ");
	words = words.map((word) => word.toLowerCase());

	let replied = false;

	words.forEach((word) => {
		if (Object.keys(replies).includes(word)) {
			createChat("bot", replies[word]);
			replied = true;
			return;
		}
	});

	if (!replied) createChat("bot", "Command Not Found, Find the command in the command section");
}

function handleForm(e) {
	e.preventDefault();
	const message = chatInput.value;
	if (message === "") {
		return;
	} else {
		createChat("user", message);
	}
	chatInput.value = "";
	setTimeout(() => botReply(message), 700);
}

chatForm.addEventListener("submit", handleForm);
