const answers = [
{"zh":"千万别在这上面押宝", "en":"Don't bet on it"},
{"zh":"采取一个大胆的态度", "en":"Adopt an adventurous attitude"},
{"zh":"听取专家的意见", "en":"Follow the advice of experts"},
{"zh":"你会发现你自己无法妥协", "en":"You could find yourself unable to compromise"},
{"zh":"专注在你的家庭生活上吧", "en":"Focus on your home life"},
{"zh":"研究，然后享受它", "en":"Investigate and then enjoy it"},
{"zh":"当然", "en":"Definitely"},
{"zh":"它仍将无法预测", "en":"It will remain unpredictable"},
{"zh":"绝对不", "en":"Absolutely not"},
{"zh":"带着好玩的好奇心去探索它", "en":"Explore it with playful curiosity"},
{"zh":"最好等等看", "en":"Better to wait"},
{"zh":"它好像是确定的", "en":"It seems assured"},
{"zh":"趁早做", "en":"Do it early"},
{"zh":"对别人保密", "en":"Keep it to yourself"},
{"zh":"可能会发生一些令人吃惊的事作为结局", "en":"Startling events may occur as result"},
{"zh":"答案可能会是以另一种语言形式来到你身边", "en":"The answer may come to you in another language"},
{"zh":"你将需要适当调整一下", "en":"You will need to accommodate"},
{"zh":"怀疑它", "en":"Doubt it"},
{"zh":"它将会带来好运", "en":"It will bring good luck"},
{"zh":"要有耐心点", "en":"Be patient"},
{"zh":"你会发现你所需要知道的一切", "en":"You will find out everything you'll need to know"},
{"zh":"有一个实质性的连接链接到另种情况", "en":"There is a substantial link to another situation"},
{"zh":"你将会很开心你这样做了", "en":"You'll be happy you did"},
{"zh":"把它写下来", "en":"Get it in writing"},
{"zh":"千万别陷入你的个人感情", "en":"Don't get caught up in your emotions"},
{"zh":"改变你的焦点", "en":"Shift your focus"},
{"zh":"这时候非常不顺利", "en":"Unfavorable at this time"},
{"zh":"用任何你能做到的方式去提升", "en":"Upgrade any way you can"},
{"zh":"如果你照你说的做", "en":"If you do as you're told"},
{"zh":"如果它是做的很好的；如果不是，就再也不要做它了", "en":"If it's done well;if not,don't do it at all"},
{"zh":"这个时候不要要求更多", "en":"Don't ask for any more at this time"},
{"zh":"避开第一个解决方案", "en":"Avoid the first solution"},
{"zh":"观察，看看会发生什么事", "en":"Watch and see what happens"},
{"zh":"它会影响到其他人怎么看你", "en":"It will affect how others see you"},
{"zh":"你会得到最终决定", "en":"You'll get the final word"},
{"zh":"以一个更加轻松的速度行进吧", "en":"Proceed at a more relaxed pace"},
{"zh":"最好的解决方法可能不是显而易见的那个", "en":"The best solution may not be the obvious one"},
{"zh":"保持灵活性", "en":"Remain flexible"},
{"zh":"这不是你所能控制的", "en":"That's out of your control"},
{"zh":"只要你说“谢谢”", "en":"Provided you say 'Thank you'"},
{"zh":"享受体验", "en":"Enjoy the experience"},
{"zh":"谨慎地处理", "en":"Approach cautiously"},
{"zh":"注意细节", "en":"Pay attention to the details"},
{"zh":"当你要去做的时候，小心行事", "en":"Watch your step as you go"},
{"zh":"毫无保留地把它说出来", "en":"Speak up about it"},
{"zh":"不要犹豫了", "en":"Don't hesitate"},
{"zh":"它有着非常重要的意义", "en":"It is significant"},
{"zh":"更换一下重要事项的优先顺序", "en":"Reprioritize what is important"},
{"zh":"这是一个做一个新计划的最好时机了", "en":"This is a good time to make a new plan"},
{"zh":"继续前进", "en":"Move on"},
{"zh":"做个为什么不这样的清单", "en":"Make a list of why not"},
{"zh":"不要等待", "en":"Don't wait"},
{"zh":"它将是你无法忘怀的事", "en":"It is something you won't forget"},
{"zh":"期望能够解决", "en":"Expect to settle"},
{"zh":"找出更多的选择", "en":"Seek out more options"},
{"zh":"履行你自己的义务", "en":"Follow through on your obligations"},
{"zh":"稍后处理它", "en":"Deal with it later"},
{"zh":"跟随其他人的指引", "en":"Follow someone else's lead"},
{"zh":"做一个为什么的清单", "en":"Make a list of why"},
{"zh":"冒险一试", "en":"Take a chance"},
{"zh":"接受你习惯的改变", "en":"Accept a change to your routine"},
{"zh":"你需要采取主动", "en":"You'll need to take the initiative"},
{"zh":"这可保证不了", "en":"There is no guarantee"},
{"zh":"情况将会转变地非常快", "en":"The circumstances will change very quickly"},
{"zh":"你将不得不妥协", "en":"You'll have to compromise"},
{"zh":"你需要更多的信息", "en":"You'll need more information"},
{"zh":"相信你最初的想法", "en":"Trust your original thought"},
{"zh":"它将引起一场轰动", "en":"It will create a stir"},
{"zh":"可能会发生一些令人吃惊的事作为结局", "en":"Startling events may occur as result"},
{"zh":"它将会带来好运", "en":"It will bring good luck"},
{"zh":"如果它是做的很好的；如果不是，就再也不要做它了", "en":"If it's done well;if not,don't do it at all"},
{"zh":"这个时候不要要求更多", "en":"Don't ask for any more at this time"},
{"zh":"意识到太多的选择难如太少", "en":"Realize that too many choices is as too few"},
{"zh":"是的", "en":"Yes"},
{"zh":"更加仔细地聆听，然后你将会知道", "en":"Listen more carefully then you will know"},
{"zh":"答案就在你身边", "en":"The answer is in your backyard"},
{"zh":"让它过去吧", "en":"Let it go"},
{"zh":"那将会是一种金钱的浪费", "en":"That would be a waste of money"},
{"zh":"全力以赴", "en":"Give it all you've got"},
{"zh":"你不要真的在意", "en":"You don't really care"},
{"zh":"你需要考虑考虑其他方式", "en":"You'll need to consider other ways"},
{"zh":"从现在起的一年都没有什么所谓", "en":"A year from now it won't matter"},
{"zh":"不要浪费你的时间了", "en":"Don't waste your time"},
{"zh":"它可能是非凡的", "en":"It could be extraordinary"},
{"zh":"数到10，再问一次", "en":"Count to 10;ask again"},
{"zh":"装作它已经是真的了", "en":"Act as thought it is already real"},
{"zh":"布置优先次序将会是过程中一个必需的部分", "en":"Setting priorities will be a necessary part of the process"},
{"zh":"运用你的想象", "en":"Use your imagination"},
{"zh":"它一定会很好", "en":"It's gonna be great"},
{"zh":"确保最好的决定，镇定下来", "en":"To ensure the best decision, be calm"},
{"zh":"等待", "en":"Wait"},
{"zh":"当你行动的时候，你将需要不断弥补", "en":"You'll have to make it up as you go"},
{"zh":"一笑置之", "en":"Laugh about it"},
{"zh":"别人也同样取决于你的选择", "en":"Others will depend on your choices"},
{"zh":"你将会后悔的", "en":"You'll regret it"},
{"zh":"无可非议", "en":"Unquestionably"},
{"zh":"当然", "en":"Of course"},
{"zh":"你知道现在比之前更好了", "en":"You know better now than ever before"},
{"zh":"相信你的直觉", "en":"Trust your intuition"},
{"zh":"把它看作一个机会", "en":"Consider it an opportunity"},
{"zh":"问问你的母亲", "en":"Ask your mother"},
{"zh":"可能，当你老的时候", "en":"Perhaps, when you're older"},
{"zh":"只能做一次", "en":"Only do it once"},
{"zh":"可能", "en":"Maybe"},
{"zh":"千万别在这上面押宝", "en":"Don't bet on it"},
{"zh":"采取一个大胆的态度", "en":"Adopt an adventurous attitude"},
{"zh":"不行", "en":"No"},
{"zh":"行", "en":"Yes"},
{"zh":"你的行动将会改善一切", "en":"Your actions will improve things"},
{"zh":"别傻了", "en":"Don't be ridiculous"},
{"zh":"千万别在这上面押宝", "en":"Don't bet on it"},
{"zh":"采取一个大胆的态度", "en":"Adopt an adventurous attitude"},
{"zh":"听取专家的意见", "en":"Follow the advice of experts"},
{"zh":"你会发现你自己无法妥协", "en":"You could find yourself unable to compromise"},
{"zh":"专注在你的家庭生活上吧", "en":"Focus on your home life"},
{"zh":"研究，然后享受它", "en":"Investigate and then enjoy it"},
{"zh":"当然", "en":"Definitely"},
{"zh":"它仍将无法预测", "en":"It will remain unpredictable"},
{"zh":"绝对不", "en":"Absolutely not"},
{"zh":"带着好玩的好奇心去探索它", "en":"Explore it with playful curiosity"},
{"zh":"欣然地确定它", "en":"Be delightfully sure of it"},
{"zh":"最好等等看", "en":"Better to wait"},
{"zh":"对别人保密", "en":"Keep it to yourself"},
{"zh":"可能会发生一些令人吃惊的事作为结局", "en":"Startling events may occur as result"},
{"zh":"问问你的父亲", "en":"Ask your father"},
{"zh":"绝不", "en":"Never"},
{"zh":"答案可能会是以另一种语言形式来到你身边", "en":"The answer may come to you in another language"},
{"zh":"你将需要适当调整一下", "en":"You will need to accommodate"},
{"zh":"怀疑它", "en":"Doubt it"},
{"zh":"它将会带来好运", "en":"It will bring good luck"},
{"zh":"要有耐心点", "en":"Be patient"},
{"zh":"你会发现你所需要知道的一切", "en":"You will find out everything you'll need to know"},
{"zh":"有一个实质性的连接链接到另种情况", "en":"There is a substantial link to another situation"},
{"zh":"观察，看看会发生什么事", "en":"Watch and see what happens"},
{"zh":"它会影响到其他人怎么看你", "en":"It will affect how others see you"},
{"zh":"你将会很开心你这样做了", "en":"You'll be happy you did"},
{"zh":"把它写下来", "en":"Get it in writing"},
{"zh":"这时候非常不顺利", "en":"Unfavorable at this time"},
{"zh":"用任何你能做到的方式去提升", "en":"Upgrade any way you can"},
{"zh":"如果你照你说的做", "en":"If you do as you're told"},
{"zh":"移除你自己的阻碍", "en":"Remove your own obstacles"},
{"zh":"最好把注意力放在你的工作上", "en":"It would be better to focus on your work"},
{"zh":"赌一下", "en":"Bet on it"},
{"zh":"先把其他事完成", "en":"Finish something else first"},
{"zh":"你可能有敌对的人", "en":"You may have opposition"},
{"zh":"你太靠近看了", "en":"You are too close to see"},
{"zh":"情况还不清楚", "en":"The situation is unclear"},
{"zh":"需要一个实质性的努力", "en":"A substantial effort will be required"},
{"zh":"先让你自己休息一下", "en":"Allow yourself to rest first"},
{"zh":"这个机会不会很快再来", "en":"The chance will not come again soon"},
{"zh":"再重新考虑你的方法", "en":"Reconsider your approach"},
{"zh":"它将是不可取的", "en":"It would be inadvisable"},
{"zh":"等待一个更好的提议", "en":"Wait for a better offer"},
{"zh":"早点定下来", "en":"Settle it soon"},
{"zh":"是的，但是别强迫", "en":"Yes, but don't force it"},
{"zh":"去取得一个更加清晰的视野", "en":"Get a clearer view"},
{"zh":"实际点", "en":"Be practical"},
{"zh":"节省你的能量吧", "en":"Save your energy"},
{"zh":"冒险一试", "en":"Take a chance"},
{"zh":"现在你可以", "en":"Now you can"},
{"zh":"不要做得过火了", "en":"Don't overdo it"},
{"zh":"它将会扶持你", "en":"It will sustain you"},
{"zh":"你将为它付出代价", "en":"It'll cost you"},
{"zh":"它肯定会把事情变得有趣", "en":"It is sure to make things interesting"},
{"zh":"结果会是积极的", "en":"The outcome will be positive"},
{"zh":"无论如何", "en":"No matter what"},
{"zh":"它是肯定的", "en":"It is certain"},
{"zh":"它将是一种乐趣", "en":"It will be a pleasure"},
{"zh":"它是不确定的", "en":"It is uncertain"},
{"zh":"更加慷慨点", "en":"Be more generous"},
{"zh":"你可能必须要丢下其他的东西", "en":"You may have to drop other things"},
{"zh":"不用担心", "en":"Don't be concerned"},
{"zh":"对意外情况做好准备", "en":"Prepare for the unexpected"},
{"zh":"它没有什么意义", "en":"It is not significant"},
{"zh":"告诉别人它对你意味着什么", "en":"Tell someone what it means to you"},
{"zh":"你可能必须要丢下其他的东西", "en":"You may have to drop other things"},
{"zh":"无论你做什么，结果都将会持续下去", "en":"Whatever you do the results will be lasting"},
{"zh":"保持开放的心态", "en":"Keep an open mind"},
{"zh":"制作计划的好时机", "en":"It's a good time to make plans"},
{"zh":"它可能很难，但是你会发现它是有价值的", "en":"It may be difficult but you will find value in it"},
{"zh":"它值得麻烦", "en":"It is worth the trouble"},
{"zh":"采取一个大胆的态度", "en":"Adopt an adventurous attitude"},
{"zh":"听取专家的意见", "en":"Follow the advice of experts"},
{"zh":"将会有阻碍需要去克服", "en":"There will be obstacles to overcome"},
{"zh":"相关联的问题可能会浮出水面", "en":"Related issues may surface"},
{"zh":"你肯定需要支持", "en":"You are sure to have support"},
{"zh":"协助将会使你向成功发展", "en":"Assistance would make your progress a success"},
{"zh":"合作将会是至关重要的", "en":"Collaboration will be the key"},
{"zh":"接管", "en":"Take charge"},
{"zh":"不能失败", "en":"It cannot fail"},
{"zh":"温和的坚持会有回报的", "en":"Gentle persistence will pay off"},
{"zh":"你将不会失望", "en":"You will not be disappointed"},
{"zh":"找出更多的提议", "en":"Seek out more options"},
{"zh":"它可能是一个木已成舟的事", "en":"It may already be a done deal"},
{"zh":"贯彻你的良好心愿", "en":"Follow through with your good intentions"},
{"zh":"花多点时间去决定", "en":"Take more time to decide"},
{"zh":"不要被迫太快行动", "en":"Don't be pressured into acting too quickly"},
{"zh":"不要忽略那些显而易见的事", "en":"Don't ignore the obvious"},
{"zh":"你必须现在行动", "en":"You must act now"},
{"zh":"它不值得努力", "en":"It's not worth a struggle"},
{"zh":"如果你不抵抗", "en":"If you don't resist"},
{"zh":"遵守规则", "en":"Respect the rules"},
{"zh":"别忘记了享受乐趣", "en":"Don't forget to have fun"},
{"zh":"不要怀疑", "en":"Don't doubt it"},
{"zh":"一个有力的承诺将会获得好的结果", "en":"A strong commitment will achieve good results"},
{"zh":"试试一个不太可能的解决方案", "en":"Try a more unlikely solution"},
{"zh":"放弃老的解决方案", "en":"Leave behind old solutions"},
{"zh":"不，如果你独自一个人的话", "en":"Not if you're alone"},
{"zh":"灾难是极有可能的", "en":"Mishaps are highly probable"},
{"zh":"迫切要求终止", "en":"Press for closure"},
{"zh":"听取专家的意见", "en":"Follow the advice of experts"},
{"zh":"你会发现你自己无法妥协", "en":"You could find yourself unable to compromise"},
{"zh":"专注在你的家庭生活上吧", "en":"Focus on your home life"},
{"zh":"研究，然后享受它", "en":"Investigate and then enjoy it"},
{"zh":"当然", "en":"Definitely"},
{"zh":"它仍将无法预测", "en":"It will remain unpredictable"},
{"zh":"绝对不", "en":"Absolutely not"},
{"zh":"带着好玩的好奇心去探索它", "en":"Explore it with playful curiosity"},
{"zh":"最好等等看", "en":"Better to wait"},
{"zh":"它好像是确定的", "en":"It seems assured"},
{"zh":"趁早做", "en":"Do it early"},
{"zh":"对别人保密", "en":"Keep it to yourself"},
{"zh":"可能会发生一些令人吃惊的事作为结局", "en":"Startling events may occur as result"},
{"zh":"答案可能会是以另一种语言形式来到你身边", "en":"The answer may come to you in another language"},
{"zh":"你将需要适当调整一下", "en":"You will need to accommodate"},
{"zh":"怀疑它", "en":"Doubt it"},
{"zh":"它将会带来好运", "en":"It will bring good luck"},
{"zh":"要有耐心点", "en":"Be patient"},
{"zh":"你会发现你所需要知道的一切", "en":"You will find out everything you'll need to know"},
{"zh":"有一个实质性的连接链接到另种情况", "en":"There is a substantial link to another situation"},
{"zh":"你将会很开心你这样做了", "en":"You'll be happy you did"},
{"zh":"把它写下来", "en":"Get it in writing"},
{"zh":"千万别陷入你的个人感情", "en":"Don't get caught up in your emotions"},
{"zh":"改变你的焦点", "en":"Shift your focus"},
{"zh":"这时候非常不顺利", "en":"Unfavorable at this time"},
{"zh":"用任何你能做到的方式去提升", "en":"Upgrade any way you can"},
{"zh":"如果你照你说的做", "en":"If you do as you're told"},
{"zh":"如果它是做的很好的；如果不是，就再也不要做它了", "en":"If it's done well;if not,don't do it at all"},
{"zh":"这个时候不要要求更多", "en":"Don't ask for any more at this time"},
{"zh":"避开第一个解决方案", "en":"Avoid the first solution"},
{"zh":"观察，看看会发生什么事", "en":"Watch and see what happens"},
{"zh":"它会影响到其他人怎么看你", "en":"It will affect how others see you"},
{"zh":"你会得到最终决定", "en":"You'll get the final word"},
{"zh":"以一个更加轻松的速度行进吧", "en":"Proceed at a more relaxed pace"},
{"zh":"最好的解决方法可能不是显而易见的那个", "en":"The best solution may not be the obvious one"},
{"zh":"保持灵活性", "en":"Remain flexible"},
{"zh":"这不是你所能控制的", "en":"That's out of your control"},
{"zh":"只要你说“谢谢”", "en":"Provided you say 'Thank you'"},
{"zh":"享受体验", "en":"Enjoy the experience"},
{"zh":"谨慎地处理", "en":"Approach cautiously"},
{"zh":"注意细节", "en":"Pay attention to the details"},
{"zh":"当你要去做的时候，小心行事", "en":"Watch your step as you go"},
{"zh":"毫无保留地把它说出来", "en":"Speak up about it"},
{"zh":"不要犹豫了", "en":"Don't hesitate"},
{"zh":"它有着非常重要的意义", "en":"It is significant"},
{"zh":"更换一下重要事项的优先顺序", "en":"Reprioritize what is important"},
{"zh":"这是一个做一个新计划的最好时机了", "en":"This is a good time to make a new plan"},
{"zh":"继续前进", "en":"Move on"},
{"zh":"做个为什么不这样的清单", "en":"Make a list of why not"},
{"zh":"不要等待", "en":"Don't wait"},
{"zh":"它将是你无法忘怀的事", "en":"It is something you won't forget"},
{"zh":"期望能够解决", "en":"Expect to settle"},
{"zh":"找出更多的选择", "en":"Seek out more options"},
{"zh":"履行你自己的义务", "en":"Follow through on your obligations"},
{"zh":"稍后处理它", "en":"Deal with it later"},
{"zh":"跟随其他人的指引", "en":"Follow someone else's lead"},
{"zh":"做一个为什么的清单", "en":"Make a list of why"},
{"zh":"冒险一试", "en":"Take a chance"},
{"zh":"接受你习惯的改变", "en":"Accept a change to your routine"},
{"zh":"你需要采取主动", "en":"You'll need to take the initiative"},
{"zh":"这可保证不了", "en":"There is no guarantee"},
{"zh":"情况将会转变地非常快", "en":"The circumstances will change very quickly"},
{"zh":"你将不得不妥协", "en":"You'll have to compromise"},
{"zh":"你需要更多的信息", "en":"You'll need more information"},
{"zh":"相信你最初的想法", "en":"Trust your original thought"},
{"zh":"它将引起一场轰动", "en":"It will create a stir"},
{"zh":"可能会发生一些令人吃惊的事作为结局", "en":"Startling events may occur as result"},
{"zh":"它将会带来好运", "en":"It will bring good luck"},
{"zh":"如果它是做的很好的；如果不是，就再也不要做它了", "en":"If it's done well;if not,don't do it at all"},
{"zh":"这个时候不要要求更多", "en":"Don't ask for any more at this time"},
{"zh":"意识到太多的选择难如太少", "en":"Realize that too many choices is as too few"},
{"zh":"是的", "en":"Yes"},
{"zh":"更加仔细地聆听，然后你将会知道", "en":"Listen more carefully then you will know"},
{"zh":"答案就在你身边", "en":"The answer is in your backyard"},
{"zh":"让它过去吧", "en":"Let it go"},
{"zh":"那将会是一种金钱的浪费", "en":"That would be a waste of money"},
{"zh":"全力以赴", "en":"Give it all you've got"},
]