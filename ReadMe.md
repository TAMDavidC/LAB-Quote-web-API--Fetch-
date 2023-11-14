Quote web API
David Cruz
11/14/2023

TODO
- [] modify fetchQuotes() - Modify fetchQuotes() to use the Fetch API to request quotes from the quote web API. Call fetch() with an appropriate URL based on the topic and count parameters. Then display the quotes in an ordered list. Each quote should be followed by a space, a dash, a space, and the source.

url example https://wp.zybooks.com/quotes.php?topic=success&count=1

## Notes
That took way longer than I needed. I was having issues figuring out how to diferenicate between the two objects
which whas an array and a object so I ended up going on a side tangent going throug multiple websites for answers.
1. pattern reconginition
2. object recogniation
all of these failed but one.

https://stackoverflow.com/questions/44166445/how-to-use-fetch-api-to-get-an-array-back
"Otherwise you can simply just use the .json method to get the array value."
THE ANSWER WAS RIGHT THERE!!
~~~ javascript
if (quotes.error)
~~~

This single line saved me. usally when doing this in other programming languages "Godot", it will display a error that it doesn't exist. 
