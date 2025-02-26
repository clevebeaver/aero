<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html>
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
  <meta http-equiv="Content-Style-Type" content="text/css">
  <title></title>
  <meta name="Generator" content="Cocoa HTML Writer">
  <meta name="CocoaVersion" content="2575.4">
  <style type="text/css">
    p.p1 {margin: 0.0px 0.0px 0.0px 0.0px; font: 13.3px Menlo; -webkit-text-stroke: #000000; background-color: #ffffff}
    p.p2 {margin: 0.0px 0.0px 0.0px 0.0px; font: 13.3px Menlo; -webkit-text-stroke: #000000; background-color: #ffffff; min-height: 15.0px}
    span.s1 {font-kerning: none}
  </style>
</head>
<body>
<p class="p1"><span class="s1">const questions = [</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>{</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>question: "Which Caribbean island is a popular Fly With Aero destination?",</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>options: ["Jamaica", "Florida", "Texas", "New York"],</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>answer: "Jamaica"</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>},</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>{</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>question: "What’s the busiest airport in the Southeast US?",</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>options: ["ATL", "MIA", "CLT", "BNA"],</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>answer: "ATL"</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>}</span></p>
<p class="p1"><span class="s1">];</span></p>
<p class="p1"><span class="s1">let currentQuestion = 0;</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">function loadQuestion() {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>const q = questions[currentQuestion];</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>document.getElementById("question").innerText = q.question;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>const optionsDiv = document.getElementById("options");</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>optionsDiv.innerHTML = "";</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>q.options.forEach(option =&gt; {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>const btn = document.createElement("button");</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>btn.innerText = option;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>btn.onclick = () =&gt; checkAnswer(option);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>optionsDiv.appendChild(btn);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>});</span></p>
<p class="p1"><span class="s1">}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">function checkAnswer(selected) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>const q = questions[currentQuestion];</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>const result = document.getElementById("result");</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>result.innerText = selected === q.answer ? "Correct!" : "Wrong! The answer is " + q.answer;</span></p>
<p class="p1"><span class="s1">}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">function nextQuestion() {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>currentQuestion++;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>if (currentQuestion &lt; questions.length) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>loadQuestion();</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>document.getElementById("result").innerText = "";</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>} else {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>document.getElementById("question").innerText = "Quiz Complete!";</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>document.getElementById("options").innerHTML = "";</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>document.getElementById("next-btn").style.display = "none";</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>}</span></p>
<p class="p1"><span class="s1">}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">loadQuestion();</span></p>
</body>
</html>
