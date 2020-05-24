(function() {
	'use strict';
	const userNameInput = document.getElementById('user-name');
	const assessmentButton = document.getElementById('assessment');
	const resultDivided = document.getElementById('result-area');
	const tweetDivided = document.getElementById('tweet-area');

	/**
	* remove all of the child that insisted
	* @param {HTMLElement}
	*/

	function removeAllChildren(element) {
		while (element.firstChild) {
			element.removeChild(element.firstChild);
		}
	}

	assessmentButton.onclick = () => {
		const userName = userNameInput.value;
		if (userName.length === 0) {
			return;
		}

		removeAllChildren(resultDivided);
		const header = document.createElement('h3');
		header.innertext = '診断結果';
		resultDivided.appendChild(header);

		const paragraph = document.createElement('p');
		const result = assessment(userName);
		paragraph.innerText = result;
		resultDivided.appendChild(paragraph);
	}

	const answers = [
		'{userName}のいいところは声です。イケボ。惚れる。。',
		'{userName}のいいところは眼差しです。そんなに見ないで妊娠しちゃう。',
		'{userName}のいいところは情熱です。あっつい。ついてく。',
		'{userName}のいいところは厳しさです。仕事は任せた俺は寝る。',
		'{userName}のいいところは知識です。いつも勉強してるもんねえらい。',
		'{userName}のいいところはユニークさです。なんでそんな面白いのジェラシー。',
		'{userName}のいいところは用心深さです。いいよー一歩ずつ行こう。',
		'{userName}のいいところは見た目です。美しい。好き。',
		'{userName}のいいところは決断力です。いつも決めてくれてまじ助かる。',
		'{userName}のいいところは思いやりです。え、ありがとう！優しみー。',
		'{userName}のいいところは感受性です。僕より先に泣かないでくれない？',
		'{userName}のいいところは節度です。しっかりしてる。You know the line.',
		'{userName}のいいところは好奇心です。今度はそれやるの！？俺もやる！',
		'{userName}のいいところは気配りです。気配り大臣！',
		'{userName}のいいところは全てです。お前最高！',
		'{userName}のいいところは自制心です。据え膳食わぬはなんとやら。'
	];

	/**
	* 名前の文字列を渡すと診断結果を返す関数
	* @param {string} userName 
	* @return {string} result
	*/
	function assessment(userName) {
		//add all number of character
		let someOfCharCode = 0;
		for (let i = 0; i < userName.length; i++) {
			someOfCharCode += userName.charCodeAt(i);
		}

		//devide some by number of patterns
		const index = someOfCharCode % answers.length;
		let result = answers[index];
		result = result.replace(/{userName}/g, userName);

		// SWITCH {userName} to users name
		return result;
	}

	console.assert(
		assessment('taro') === 'taroのいいところは用心深さです。いいよー一歩ずつ行こう。',
		'ただしくありません。'
		);
	console.assert(
		assessment('taro') === assessment('jaro'),
		'入力が同じ名前の時に診断結果を返す処理がない。'
		);

})();
