$[ dbs/set.mm $]

$(
h1::jagra.1          |- A e. CC
h2::jagra.2          |- ( A + 2 ) = 4
3::2p2e4             |- ( 2 + 2 ) = 4
4::2cn               |- 2 e. CC
5:1,4,2:mvlraddi    |- A = ( 4 - 2 )
6:4,4,3:mvlraddi    |- 2 = ( 4 - 2 )
qed:5,6:eqtr4i     |- A = 2

From metamath-lamp

${
	x.1 $e |- ( 2 + A ) = 4 $.
	x.2 $e |- A e. CC $.
	jag $p |- A = 2 $= ( c4 c2 cmin co 2cn mvlladdi 2p2e4 eqtr4i ) ADZEZFGMMALHZCBIMMLNNJIK $.
$}

--- qed ---------------------------------------
  1|              | cA       | class A
  2|              | c4       | class 4
  3|              | c2       | class 2
  4|              | cmin     | class -
  5| 2,3,4        | co       | class ( 4 - 2 )
  6|              | 2cn      | |- 2 e. CC
  7|              | x.2      | |- A e. CC
  8|              | x.1      | |- ( 2 + A ) = 4
  9| 3,1,2,6,7,8  | mvlladdi | |- A = ( 4 - 2 )
 10|              | 2p2e4    | |- ( 2 + 2 ) = 4
 11| 3,3,2,6,6,10 | mvlladdi | |- 2 = ( 4 - 2 )
 12| 1,5,3,9,11   | eqtr4i   | |- A = 2
-----------------------------------------------

$)

$( Reverse closure of the closed set operation.  (Contributed by Stefan
    O'Rear, 22-Feb-2015.) $)
jag-cldrcl $p |- ( C e. ( Clsd ` J ) -> J e. Top ) $=
  ( ccld cfv wcel cdm ctop elfvdm wfn wceq fncld fndm ax-mp syl6eleq ) ABCDEB
  CFZGABCHCGIOGJKGCLMN $.

${

      $( Ordering property for complex exponentiation.  (Contributed by Mario
         Carneiro, 30-May-2016.) $)
      jag-cxple2d $p |- ( ph -> ( A <_ B <-> ( A ^c C ) <_ ( B ^c C ) ) ) $=
        ( cr wcel cc0 cle wbr crp ccxp co wb cxple2 syl221anc ) ABJKLBMNCJKLCMN
        DOKBCMNBDPQCDPQMNREFGHIBCDST $.

$}


${
	jag.1 $e |- ( 2 + A ) = 4 $.
	jag.2 $e |- A e. CC $.
	jag $p |- A = 2 $= ( cA c4 c2 cmin co 2cn mvlladdi 2p2e4 eqtr4i ) ADZEZFGMMALHZCBIMMLNNJIK $.
$}

${
	jag1.1 $e |- ( 2 + A ) = 4 $.
	jag1.2 $e |- A e. CC $.
	jag1 $p |- A = 2 $= cA c4 c2 cmin co c2 c2 cA c4 2cn jag.2 jag.1 mvlladdi c2 c2 c4 2cn 2cn 2p2e4 mvlladdi eqtr4i $.
$}
