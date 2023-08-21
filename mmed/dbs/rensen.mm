

$c -> ! ( ) wff |- $.
$v p q r $.

wp $f wff p $.
wq $f wff q $.
wr $f wff r $.

wim $a wff ( p -> q ) $.
wn $a wff ! p $.

a1 $a |- p -> ( q -> p ) $.
a2 $a |- ( p -> ( q -> r ) ) -> ( ( p -> q ) -> ( p -> r ) ) $.

${
    min $e |- p $.
    maj $e |- p -> q $.
    mp $a |- q $.
$}

lem1 $p |- ( ( p -> ( p -> p ) ) -> ( p -> p ) ) $= ? $.