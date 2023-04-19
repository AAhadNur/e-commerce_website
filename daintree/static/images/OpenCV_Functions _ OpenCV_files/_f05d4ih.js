try { 
	function isObjectEmpty(value) {
  return (
    Object.prototype.toString.call(value) === '[object Object]' &&
    JSON.stringify(value) === '{}'
  );
}
/*
webengage.user.login("hiren");
webengage.user.setAttribute('NLP_score', 3)
webengage.user.setAttribute('ML_score', 10)
webengage.user.setAttribute('DE_score',5)
webengage.user.setAttribute('DE_score',5)
*/
try {
    webengage.onReady(function() {
        var priority = ["NLP_score", "DL_score", "ML_score", "BA_score", "DE_score"];
        var score = {
            "NLP": 3,
            "Deep Learning": 3,
            "Machine Learning": 1,
            "Business Analytics": 1,
            "Data Engineering": 1
        }; // "NLP" , "DL" , "ML" , "BA" , "DE"

        var attributeMap = {
            "NLP": "NLP_score",
            "Deep Learning": "DL_score",
            "Machine Learning": "ML_score",
            "Business Analytics": "BA_score",
            "Data Engineering": "DE_score"
        };
        var scrapCategories = [];

        var qa = document.querySelectorAll('.i-category > span > a');
        for (var index = 0; index < qa.length; index++) {
            var element = qa[index].title;
            scrapCategories.push(element);
        }

        var setObject = {};
        if (scrapCategories.length > 0) {
            var realCategories = scrapCategories;
            if (realCategories.length > 0) {
                for (var i = 0; i < realCategories.length; i++) {
                    var cat = realCategories[i];
                    
                    if (cat !== '' && cat !== undefined && attributeMap[cat] !== undefined) {
                        setObject[attributeMap[cat]] = score[cat];
                    }
                }
            }
        }
        if (!isObjectEmpty(setObject)) {
            webengage.require('webengage/profile').load(function() {
                var uattr = webengage && webengage.state && typeof webengage.state.getForever == 'function' && webengage.state.getForever().uattr && webengage.state.getForever().uattr !== undefined ? webengage.state.getForever().uattr : null;
                var cuid = webengage && webengage.state && typeof webengage.state.getForever == 'function' && webengage.state.getForever().uattr && webengage.state.getForever().cuid !== undefined ? webengage.state.getForever().cuid : null;
                if (uattr !== null) {
                    if (cuid !== null) {
                        for (var key in uattr) {
                            for (var k in setObject) {
                                if (key == k) {
                                    setObject[key] = uattr[key] + setObject[k];
                                } else {
                                    //key doesnt exist in setObject 
                                    setObject[k] = setObject[k];
                                }
                            }
                        }
                        while (true) {
                            if (setObject[priority[0]] !== undefined) {
                                delete setObject[priority[1]];
                                delete setObject[priority[2]];
                                delete setObject[priority[3]];
                                delete setObject[priority[4]];
                                break;
                            }
                            if (setObject[priority[1]] !== undefined) {
                                delete setObject[priority[2]];
                                delete setObject[priority[3]];
                                delete setObject[priority[4]];
                                break;
                            }
                            if (setObject[priority[2]] !== undefined) {
                                delete setObject[priority[3]];
                                delete setObject[priority[4]];
                                break;
                            }
                            if (setObject[priority[3]] !== undefined) {
                                delete setObject[priority[4]];
                                break;
                            }
                            if (setObject[priority[4]] !== undefined) {
                                break;
                            }
                          break;
                        }
                        webengage.user.setAttribute(setObject);
                        // sum all the score to find out in which segment user should go in

                        webengage.require('webengage/profile').load(function() {
                            var t_uattr = webengage && webengage.state && typeof webengage.state.getForever == 'function' && webengage.state.getForever().uattr && webengage.state.getForever().uattr !== undefined ? webengage.state.getForever().uattr : null;
                            var scores = [];
                            if (t_uattr['NLP_score'] !== undefined) {
                                var nlp = {};
                                if (setObject['NLP_score'] !== undefined) {
                                    nlp = {
                                        score: [setObject['NLP_score'], 'nlp']
                                    };
                                } else {
                                    nlp = {
                                        score: [t_uattr['NLP_score'], 'nlp']
                                    };
                                }
                                if (nlp && nlp.score && nlp.score[0] !== undefined) {
                                    scores.push(nlp);
                                }
                            }
                            if (t_uattr['DL_score'] !== undefined) {
                                var dl = {};
                                if (setObject['DL_score'] !== undefined) {
                                    dl = {
                                        score: [setObject['DL_score'], 'dl']
                                    };
                                } else {
                                    dl = {
                                        score: [t_uattr['DL_score'], 'dl']
                                    };
                                }
                                if (dl && dl.score && dl.score[0] !== undefined) {
                                    scores.push(dl);
                                }
                            }
                            if (t_uattr['ML_score'] !== undefined) {
                                var ml = {};
                                if (setObject['ML_score'] !== undefined) {
                                    var ml = {
                                        score: [setObject['ML_score'], 'ml']
                                    };
                                } else {
                                    var ml = {
                                        score: [t_uattr['ML_score'], 'ml']
                                    };
                                }
                                if (ml && ml.score && ml.score[0] !== undefined) {
                                    scores.push(ml);
                                }
                            }
                            if (t_uattr['BA_score'] !== undefined) {
                                var ba = {};
                                if (setObject['BA_score'] !== undefined) {
                                    ba = {
                                        score: [setObject['BA_score'], 'ba']
                                    };
                                } else {
                                    ba = {
                                        score: [t_uattr['BA_score'], 'ba']
                                    };
                                }
                                if (ba && ba.score && ba.score[0] !== undefined) {
                                    scores.push(ba);
                                }
                            }
                            if (t_uattr['DE_score'] !== undefined) {
                                var de = {};
                                if (setObject['DE_score'] !== undefined) {
                                    de = {
                                        score: [setObject['DE_score'], 'de']
                                    };
                                } else {
                                    de = {
                                        score: [t_uattr['DE_score'], 'de']
                                    };
                                }
                                if (de && de.score && de.score[0] !== undefined) {
                                    scores.push(de);
                                }
                            }
                            var final = scores.reduce(function(max, obj) {
                                return obj.score[0] > max.score[0] ? obj : max;
                            });
                            if (final !== null && final !== undefined) {
                                if (final && final['score']) {
                                    var finalObj = {
                                        'master_catergory': final && final['score'] && final['score'][1] && final['score'][1] !== undefined ? final['score'][1] : null
                                    };
                                    webengage.user.setAttribute(finalObj);
                                }
                            } else {
                                console.log('Master attribute not set ,', final);
                            }
                        }, true);

                    } else {
                        console.log("user Not logged in ");
                    }

                } else {
                    console.log("user attributes and  not found for the user");
                }
            });
        }
    });
} catch (e) {
    console.log('CWC err', e);
}
 } catch(e) { 
 	if (e instanceof Error) { 
		var data = e.stack || e.description;
		data = (data.length > 900 ? data.substring(0, 900) : data);
	 	webengage.eLog(null, 'error', data, 'cwc-error','cwc', '~f05d4ih');
	 }
 }
