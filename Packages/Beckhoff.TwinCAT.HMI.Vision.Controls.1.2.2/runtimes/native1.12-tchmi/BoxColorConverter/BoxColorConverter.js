var TcHmi;!function(o){let n;!function(n){let i;!function(n){let i;!function(n){n.BoxColorConverter=function(n,i,t){return i?o.Functions.Beckhoff.Vision.ConvertColor(n,o.Controls.Beckhoff.Vision.Color.Space.RGB,t).map((o=>Math.floor(o))):o.Functions.Beckhoff.Vision.ConvertColor(n,t,o.Controls.Beckhoff.Vision.Color.Space.RGB).map((o=>Math.floor(o)))}}(i=n.Vision||(n.Vision={}))}(i=n.Beckhoff||(n.Beckhoff={})),n.registerFunctionEx("BoxColorConverter","TcHmi.Functions.Beckhoff.Vision",i.Vision.BoxColorConverter)}(n=o.Functions||(o.Functions={}))}(TcHmi||(TcHmi={}));