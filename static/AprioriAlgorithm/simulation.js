function apriori(itemsetinput)
{
  console.table(itemsetinput);
  var dataset = itemsetinput;
  console.table(dataset);
  var result = [];
  console.table(result);
  var temp;
  console.table(temp);

  for (var i = 0; i < dataset.length; i++)
  {
    temp = dataset[i].length;
    for (var j = 0; j < temp; j++)
    {
      result.push(dataset[i][j]);
    }
  }
  console.table(result);

  var items=0;

  var uniqs = result.reduce((acc, val) => 
  {

    if(acc[val] === undefined)
      items+=1;

    acc[val] = acc[val] === undefined ? 1 : acc[val] += 1;
    return acc;
  },{});

  console.table(uniqs);
  console.table(items); 

  var minsup = document.getElementById("MinimumSupport").value;
  var mincon = document.getElementById("MinimumConfidence").value;
  var transaction = document.getElementById("table").value;

  console.table(minsup);
  console.table(mincon);
  console.table(transaction);

  var dataset2 = [];
  var frequent = [];
  var numcount = 0;
  var headli = '';
  var countheadli = '';

  console.table(dataset2);
  console.table(frequent);
  console.table(numcount);
  console.table(headli);
  console.table(countheadli);

  for (var key in uniqs)
  {
    var itemset = (uniqs[key] / transaction) * 100;
    if (itemset >= minsup)
    {
      numcount++;
      dataset2.push(key);
      frequent.push({ key: [key], sup: itemset.toFixed(2) });
      headli += '{' + key + '}' + ' ( Support: ' + itemset.toFixed(2)  + '% )<br>';
    }
  }

  console.table(numcount);
  console.table(dataset2);
  console.table(frequent);
  console.table(headli);

  const getAllSubsets = theArray => theArray.reduce(
      (subsets, value) => subsets.concat(
        subsets.map(set => [value, ...set])
      ),[[]]);

  var subset = getAllSubsets(dataset2);
  var html = '';

  console.table(subset);
  console.table(html);

  subset.forEach(function (element)
  {
    
    element.sort();

    if (element != [] && element.length > 1)
    {
      var count = 0;
      dataset.forEach(function (element2)
      {
        if (contains(element2, element) == true)
        {
          count += 1;
        }
      });

      if ((count / transaction) * 100 >= minsup)
      {
        numcount++;
        frequent.push({ key: element, sup: ((count / transaction) * 100).toFixed(2) });
      }
    }
  });

  var j=2;

  while(j<items)
  {
    frequent.forEach(function (element)
    {
      if(element.key.length==j)
      {
        html += '{' + element.key + '}' + ' ( Support: ' + element.sup  + '% )<br>';
      }
    });
    j+=1;
  } 

  console.table(frequent);
  console.table(subset);

  countheadli += '<label class="mb-2 mr-sm-2 ">' + numcount + ' Frequent Itemsets:</label> <br>';
  document.getElementById('showcountlg').innerHTML = countheadli;
  document.getElementById('subSetItem').innerHTML = headli;
  document.getElementById('subSet').innerHTML = html;

  function contains(haystack, needles)
  {
    return needles.map(function (needle)
    {
      return haystack.indexOf(needle);
    }).indexOf(-1) == -1;
  }

  var num = 0;
  var html = '';
  var headasso = '';

  frequent.forEach(function (assosition)
  {
    var subset2 = getAllSubsets(assosition.key);
    subset2.forEach(function (assosition2)
    {
      if (assosition2 != '' && assosition2.length != assosition.key.length)
      {
        frequent.forEach(function (assosition3)
        {
          if ((assosition.sup / assosition3.sup) * 100 >= mincon)
          {
            if (assosition2.sort().toString() == assosition3.key.sort().toString())
            {
              var remove = removeFromArray(assosition.key, assosition2);
              num += 1;
              html += '{' + assosition2.toString() + '} ==> {' + remove.toString() + '} ( Support :' + assosition.sup + '% ) , ( Confidence :' + ((assosition.sup / assosition3.sup) * 100).toFixed(2) + '% )<br>';
            }
          }
        });
      }
    });
  });
  headasso += '<label class="mb-2 mr-sm-2 ">' + num + ' Association Rules:</label> <br>';
  document.getElementById('headaso').innerHTML = headasso;
  document.getElementById('setItem').innerHTML = html;

  function removeFromArray(original, remove)
  {
    return original.filter(value => !remove.includes(value));
  }
}

var tid = 0

function table()
{
  var table = document.getElementById("table").value;
  tid = table;
  var html = "";
   
  html += '<label class="mb-2 mr-sm-2 ">Enter Transactions</label>';
  for (var i = 0; i < table; i++)
  {
    html += '<input type="text"class="form-control" name="' + i + '" id="' + i + '" aria-describedby="helpId" placeholder=""></input>' + '<br>';
  }
  if(table !=0)
  {
    html += '<div><center><button id="button1" type="button" class="btn btn-outline-danger" onclick="inputarr()">Run Algorithm</button></center></div>';
    document.getElementById('showbox').innerHTML = html;
  }
  else
  {
    document.getElementById("showbox").innerHTML = "";
  }
}

function inputarr()
{
  var itemsetinput = [];
  for (var i = 0; i < tid; i++)
  {
    var array = document.getElementById(i).value.split(",");
    itemsetinput.push(array.map(str => str.replace(/\s/g, '')));
  }
  apriori(itemsetinput)
}