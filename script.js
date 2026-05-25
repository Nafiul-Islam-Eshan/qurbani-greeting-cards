// State
        let selectedAnimal = null;
        let selectedStyle = null;

        // Greeting templates
        const greetings = {
            cow: {
                funny: [
                    "এই কুরবানিতে গরু দেখে হাসবেন না, ও তো জানে না ওর কত বড় দাম! 😄 ঈদ মোবারক!",
                    "গরু বলেছে - আমি চলে গেলাম, কিন্তু তোমার ফ্রিজে আমার স্মৃতি থাকবে! 🐄 ঈদ মোবারক!",
                    "কুরবানির গরু দেখে ভয় পেয়ো না, ও তোমার মতোই ভালো মনের! শুধু ওজন একটু বেশি! 😂",
                    "এই ঈদে গরুর মতো মোটা হও না, গরুর মতো ত্যাগী হও! ঈদ মোবারক! 🐮"
                ],
                emotional: [
                    "এই কুরবানির ঈদে ত্যাগের শিক্ষায় ভরে উঠুক তোমার জীবন 🤍 প্রিয়জনের সাথে কাটুক সুন্দর মুহূর্ত।",
                    "গরুর ত্যাগ আমাদের শেখায় - ভালোবাসা মানে নিঃস্বার্থ দেওয়া। ঈদ মোবারক প্রিয়জন 💚",
                    "প্রতিটি কুরবানি একটি নতুন শুরুর প্রতীক। তোমার জীবনে আসুক অনাবিল সুখ। ঈদ মোবারক! 🤍",
                    "ত্যাগের এই মহান দিনে তোমার পরিবারের সবাইকে জানাই অন্তর থেকে ঈদের শুভেচ্ছা 🌙"
                ],
                islamic: [
                    "তাকবীরের ধ্বনিতে মুখরিত হোক প্রতিটি প্রাণ। আল্লাহ তায়ালা কবুল করুন আমাদের কুরবানি। ঈদ মোবারক! 🕌",
                    "\"নিশ্চয়ই আমার সালাত, আমার কুরবানি... সবই আল্লাহর জন্য\" - সূরা আনআম। ঈদ মোবারক! 📿",
                    "কুরবানির মাধ্যমে আত্মত্যাগের শিক্ষা গ্রহণ করি। আল্লাহ আমাদের সবাইকে হেদায়েত দান করুন। ঈদ মোবারক! 🌙",
                    "ঈদুল আযহার শুভেচ্ছা! আল্লাহর প্রতি সম্পূর্ণ আনুগত্য ও ত্যাগের শিক্ষায় ভরে উঠুক জীবন। 🤲"
                ],
                aesthetic: [
                    "সোনালী সূর্যের আলোয় ভরে উঠুক তোমার ঈদের সকাল ✨ ত্যাগের রঙে রাঙ্গিয়ে উঠুক প্রতিটি মুহূর্ত।",
                    "ফুলের সুবাসে মিশুক ঈদের আনন্দ 🌸 তোমার জীবনে ছড়িয়ে পড়ুক শান্তি ও সমৃদ্ধি। ঈদ মোবারক!",
                    "নীল আকাশের নিচে, সবুজ ঘাসের উপর - ত্যাগের মহিমায় ভরে উঠুক এই ঈদ 🤍✨",
                    "সূর্যোদয়ের প্রথম আলোর মতো উজ্জ্বল হোক তোমার ঈদের প্রতিটি মুহূর্ত 🌅 ঈদ মোবারক!"
                ]
            },
            goat: {
                funny: [
                    "ছাগল বলেছে - আমি ছোট হলেও ত্যাগ বড়! তোমার হাসি আরও বড় হোক! 😄 ঈদ মোবারক!",
                    "ছাগল দেখে মন খারাপ করো না, ও তো জানে না ও কত কিউট! 🐐 ঈদ মোবারক!",
                    "এই ঈদে ছাগলের মতো চঞ্চল না হয়ে, ছাগলের মতো ত্যাগী হও! ঈদ মোবারক! 😂",
                    "ছাগল বলেছে - আমি চলে গেলাম কিন্তু তোমার মেমোরিতে আমার ছবি থাকবে! 📸 ঈদ মোবারক!"
                ],
                emotional: [
                    "ছোট্ট ছাগলের বড় ত্যাগ 🐐 ভালোবাসার এই মহান উৎসবে তোমার সাথে থাকুক সবাই। ঈদ মোবারক!",
                    "প্রতিটি ত্যাগের পেছনে লুকিয়ে থাকে অসীম ভালোবাসা। তোমার জীবনে আসুক সেই ভালোবাসা 💚",
                    "ছাগলের মতো নিরীহ হৃদয় নিয়ে কাটুক এই ঈদ। তোমার জীবন ভরে উঠুক শান্তিতে 🤍",
                    "ত্যাগের এই দিনে তোমার সব কষ্ট দূর হোক। আসুক নতুন সূর্যের আলো 🌅 ঈদ মোবারক!"
                ],
                islamic: [
                    "ছাগলের ত্যাগে শিক্ষা নিই - আল্লাহর পথে সবকিছু উৎসর্গ করার। ঈদ মোবারক! 🕌",
                    "\"আল্লাহর জন্য কুরবানি করো\" - এই শিক্ষায় ভরে উঠুক আমাদের জীবন। ঈদ মোবারক! 📿",
                    "ত্যাগের মহান দিনে আল্লাহর দরবারে চাই ক্ষমা ও রহমত। ঈদ মোবারক সবাইকে! 🤲",
                    "ঈদুল আযহার শুভেচ্ছা! আল্লাহ আমাদের কুরবানি কবুল করুন এবং বরকত দান করুন 🌙"
                ],
                aesthetic: [
                    "পাহাড়ি ছাগলের মতো মুক্ত হও এই ঈদে 🐐✨ তোমার জীবনে ছড়িয়ে পড়ুক আনন্দের বাতাস।",
                    "নরম সবুজ ঘাসের মাঝে ছাগলের খেলা 🌿 তেমনি আনন্দে কাটুক তোমার ঈদের দিন।",
                    "সাদা মেঘের নিচে ছাগলের দল 🐐 তোমার ঈদ যেন হয় সেই রকম সুন্দর ও শান্তিময়।",
                    "সূর্যাস্তের সোনালী রঙে রাঙ্গিয়ে উঠুক তোমার ঈদের সন্ধ্যা 🌅 ঈদ মোবারক!"
                ]
            },
            camel: {
                funny: [
                    "উট বলেছে - আমি বড় বলে ভয় পেয়ো না, আমি তো শুধু তোমার জন্য আসছি! 😄 ঈদ মোবারক!",
                    "উট দেখে হাসবেন না, ও তো জানে না ওর কত বড় দাম! 🐪 ঈদ মোবারক!",
                    "এই ঈদে উটের মতো ধৈর্য ধরো, কিন্তু উটের মতো গরগর করো না! 😂 ঈদ মোবারক!",
                    "উট বলেছে - আমি চলে গেলাম কিন্তু তোমার পেটে আমার স্মৃতি থাকবে! 🐪 ঈদ মোবারক!"
                ],
                emotional: [
                    "বিশাল উটের মহান ত্যাগ 🐪 তোমার জীবনেও আসুক এমন মহান ভালোবাসা ও ত্যাগের শিক্ষা।",
                    "মরুভূমির উটের মতো সহনশীল হও এই ঈদে। তোমার জীবন ভরে উঠুক শান্তিতে 🤍",
                    "উটের পায়ের ছাপের মতো গভীর হোক তোমার ভালোবাসা। ঈদ মোবারক প্রিয়জন! 💚",
                    "ত্যাগের এই মহান দিনে তোমার হৃদয় ভরে উঠুক কৃতজ্ঞতায়। ঈদ মোবারক! 🌙"
                ],
                islamic: [
                    "উটের ত্যাগে শিক্ষা নিই - আল্লাহর পথে সর্বোচ্চ ত্যাগের। ঈদ মোবারক! 🕌",
                    "\"আল্লাহর জন্য কুরবানি করো\" - উটের মহান ত্যাগের শিক্ষায় ভরে উঠুক জীবন। ঈদ মোবারক! 📿",
                    "ত্যাগের মহান দিনে আল্লাহর দরবারে চাই ক্ষমা ও রহমত। ঈদ মোবারক! 🤲",
                    "ঈদুল আযহার শুভেচ্ছা! আল্লাহ আমাদের কুরবানি কবুল করুন 🌙"
                ],
                aesthetic: [
                    "মরুভূমির সোনালী বালিতে উটের পায়ের ছাপ 🐪✨ তোমার জীবনেও ছড়িয়ে পড়ুক সোনালী সুখ।",
                    "সূর্যাস্তের আলোয় উটের ছায়া 🌅 তেমনি সুন্দর হোক তোমার ঈদের প্রতিটি মুহূর্ত।",
                    "নীল আকাশের নিচে মরুভূমির রাজা উট 🐪 তোমার ঈদ যেন হয় সেই রকম মহিমান্বিত।",
                    "তারার আলোয় ঝলমলে মরু রাতে উটের বিশ্রাম 🌟 শান্তিময় হোক তোমার ঈদ।"
                ]
            }
        };

        const animalEmojis = {
            cow: '🐄',
            goat: '🐐',
            camel: '🐪'
        };

        // Create particles
        function createParticles() {
            const container = document.getElementById('particles');
            for (let i = 0; i < 30; i++) {
                const particle = document.createElement('div');
                particle.className = 'particle';
                particle.style.left = Math.random() * 100 + '%';
                particle.style.animationDelay = Math.random() * 15 + 's';
                particle.style.animationDuration = (10 + Math.random() * 10) + 's';
                container.appendChild(particle);
            }
        }

        // Select animal
        function selectAnimal(element) {
            document.querySelectorAll('.animal-card').forEach(card => card.classList.remove('selected'));
            element.classList.add('selected');
            selectedAnimal = element.dataset.animal;
            checkEnableGenerate();
        }

        // Select style
        function selectStyle(element) {
            document.querySelectorAll('.style-card').forEach(card => card.classList.remove('selected'));
            element.classList.add('selected');
            selectedStyle = element.dataset.style;
            checkEnableGenerate();
        }

        // Check if generate button should be enabled
        function checkEnableGenerate() {
            const btn = document.getElementById('generateBtn');
            btn.disabled = !(selectedAnimal && selectedStyle);
        }

        // Generate card
        function generateCard() {
            if (!selectedAnimal || !selectedStyle) return;

            const loading = document.getElementById('loading');
            const preview = document.getElementById('cardPreview');
            const btn = document.getElementById('generateBtn');

            btn.style.display = 'none';
            loading.style.display = 'block';
            preview.style.display = 'none';

            // Simulate generation delay
            setTimeout(() => {
                const greetingList = greetings[selectedAnimal][selectedStyle];
                const randomGreeting = greetingList[Math.floor(Math.random() * greetingList.length)];

                document.getElementById('cardAnimal').textContent = animalEmojis[selectedAnimal];
                document.getElementById('cardGreeting').textContent = randomGreeting;

                loading.style.display = 'none';
                preview.style.display = 'block';

                // Scroll to preview
                preview.scrollIntoView({ behavior: 'smooth', block: 'center' });

                // Confetti effect
                createConfetti();
            }, 1500);
        }

        // Create confetti
        function createConfetti() {
            const colors = ['#D4AF37', '#FFF8E7', '#8B1E3F', '#2D6A4F', '#E8C84B'];
            for (let i = 0; i < 50; i++) {
                const confetti = document.createElement('div');
                confetti.className = 'confetti';
                confetti.style.left = Math.random() * 100 + '%';
                confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
                confetti.style.animationDelay = Math.random() * 2 + 's';
                confetti.style.animationDuration = (2 + Math.random() * 2) + 's';
                document.body.appendChild(confetti);
                setTimeout(() => confetti.remove(), 4000);
            }
        }

        // Download card
        function downloadCard() {
            const card = document.getElementById('cardContainer');

            html2canvas(card, {
                scale: 2,
                backgroundColor: null,
                useCORS: true
            }).then(canvas => {
                const link = document.createElement('a');
                link.download = `qurbani-eid-card-${selectedAnimal}-${selectedStyle}.png`;
                link.href = canvas.toDataURL('image/png');
                link.click();
            }).catch(err => {
                alert('ডাউনলোড করতে সমস্যা হয়েছে। আবার চেষ্টা করুন।');
            });
        }

        // Share card
        function shareCard() {
            const greeting = document.getElementById('cardGreeting').textContent;
            const text = `${greeting}\n\nVirtual Qurbani Greeting Card তৈরি করুন: virtualqurbani.com`;

            if (navigator.share) {
                navigator.share({
                    title: 'কুরবানি ঈদের শুভেচ্ছা',
                    text: greeting,
                }).catch(() => {
                    copyToClipboard(text);
                });
            } else {
                copyToClipboard(text);
            }
        }

        function copyToClipboard(text) {
            navigator.clipboard.writeText(text).then(() => {
                alert('শুভেচ্ছা বার্তা কপি হয়েছে! এখন আপনি যেখানে ইচ্ছা শেয়ার করতে পারেন।');
            }).catch(() => {
                alert('শেয়ার করতে সমস্যা হয়েছে।');
            });
        }

        // Reset card
        function resetCard() {
            selectedAnimal = null;
            selectedStyle = null;

            document.querySelectorAll('.animal-card').forEach(card => card.classList.remove('selected'));
            document.querySelectorAll('.style-card').forEach(card => card.classList.remove('selected'));

            document.getElementById('cardPreview').style.display = 'none';
            document.getElementById('generateBtn').style.display = 'block';
            document.getElementById('generateBtn').disabled = true;

            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        // Initialize
        createParticles();