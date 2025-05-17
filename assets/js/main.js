// Query Selectors
const doc = document;
const getId = "getElementById";
const rawCode = doc[getId]("rawCode");
const codeType = doc[getId]("codeType");
const parsedCode = doc[getId]("parsedCode");
const parseBtn = doc[getId]("parseBtn");
const copyBtn = doc[getId]("copyBtn");
const clearBtn = doc[getId]("clearBtn");
const parsedCodeHidden = doc[getId]("parsedCodeHidden");

// Parse Button
parseBtn.addEventListener("click", function () {
   if (rawCode.value === "") {
      window.alert("Oops, you haven't added any code.");
      return false;
   } else {
      parseBtn.innerHTML = "Parsing...";
      parseBtn.disabled = true;
      setTimeout(() => {
         const finalCode = rawCode.value
            .replace(/&/ig, "&amp;")
            .replace(/</ig, "&lt;")
            .replace(/>/ig, "&gt;")
            .replace(/"/ig, "&quot;")
            .replace(/'/ig, "&#039;")
            .replace(/&#177;/ig, "&plusmn;")
            .replace(/&#169;/ig, "&copy;")
            .replace(/&#174;/ig, "&reg;")
            .replace(/ya'll/ig, "ya'll");
         parsedCode.value = '<!-- Pre Code Parsed by ' + doc.title + ' (' + doc.location.href + ') -->\n<pre class="' + codeType.value + '"><code>\n' + finalCode + '\n</code></pre>';
         parseBtn.innerHTML = "Parse";
         parseBtn.disabled = false;
         parsedCodeHidden.classList.remove("hidden");
      }, 1000);
   }
});

// Copy Button
copyBtn.addEventListener("click", function () {
   if (rawCode.value === "") {
      window.alert("Oops, you haven't added any code.");
      return false;
   } else {
      copyBtn.innerHTML = "Copying...";
      copyBtn.disabled = true;
      setTimeout(() => {
         copyBtn.innerHTML = "Copy";
         copyBtn.disabled = false;
      }, 1000);
      parsedCode.select();
      document.execCommand("copy");
   }
});

// Clear Button
clearBtn.addEventListener("click", function () {
   if (rawCode.value === "") {
      window.alert("Oops, you haven't added any code.");
      return false;
   } else {
      clearBtn.innerHTML = "Clearing...";
      clearBtn.disabled = true;
      setTimeout(() => {
         rawCode.value = "";
         parsedCode.value = "";
         clearBtn.innerHTML = "Clear";
         clearBtn.disabled = false;
         parsedCodeHidden.classList.add("hidden");
      }, 1000);
   }
});