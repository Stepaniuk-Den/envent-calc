 function showTab(tabId) {

            document.querySelectorAll(".tab").forEach(tab => {
                tab.classList.remove("active");
            });

            document.querySelectorAll(".tabs button").forEach(button => {
                button.classList.remove("active");
            });

            document.getElementById(tabId).classList.add("active");

            document
                .querySelector(`button[onclick="showTab('${tabId}')"]`)
                .classList.add("active");

        }

        document.getElementById("debugMode").addEventListener("change", function () {
            document.getElementById("debug").style.display =
                this.checked ? "table-row-group" : "none";
        });

        function round(value) {
            return Math.ceil(value * 10) / 10;
        }

        function setResult(root, className, value) {
            root.querySelector(className).textContent = value;
        }

        function calc(root) {
            const W = +root.querySelector('.w').value || 0;
            const angle = +root.querySelector('.angle').value || 0;
            const h1 = +root.querySelector('.h1').value || 0;
            const h2 = +root.querySelector('.h2').value || 0;
            const S = +root.querySelector('.s').value || 0;
            const rad = angle * Math.PI / 180;
            const c = W;
            const a = round(c * Math.cos(rad));
            const b = round(c * Math.sin(rad));
            const d = round(c - a);
            const a1 = round(S - d);
            const c1 = round(a1 / Math.sin(rad));
            const b1 = round(c1 * Math.cos(rad));
            const h3 = round(c1 / 2);
            const h4 = h3;
            const L = round(h1 + h2 + b + b1);

            setResult(root, ".result-a", a);
            setResult(root, ".result-b", b);
            setResult(root, ".result-c", c);
            setResult(root, ".result-d", d);
            setResult(root, ".result-a1", a1);
            setResult(root, ".result-b1", b1);
            setResult(root, ".result-c1", c1);
            setResult(root, ".result-h3", h3);
            setResult(root, ".result-h4", h4);
            setResult(root, ".result-l", L);
        }

        document.querySelectorAll(".tab").forEach(tab => {

            const inputs = tab.querySelectorAll("input");

            if (!inputs.length) {
                return;
            }

            inputs.forEach(input => {
                input.addEventListener("input", () => calc(tab));
            });

            calc(tab);

        });