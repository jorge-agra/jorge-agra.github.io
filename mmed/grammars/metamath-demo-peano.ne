@top Expression { '|-' Wff }

@skip { space }

@precedence { cenas @left }

Wff {
  Variable
  | !cenas C001 Wff !cenas C002
  | Wff !cenas C003 Wff
  | Wff !cenas C004 Wff
  | Wff !cenas C005 Wff
}

@tokens {

  //  Syntax { 'wff' | 'term' | 'var' }
  Variable { 's' | 't' | 'v' | 'x' | 'y' | 'z' | 'phi' | 'psi' }

  C001 { '(' }
  C002 { ')' }
  C003 { '->' }
  C004 { '=' }
  C005 { '+' }

  space { $[ \t\n\r]+ }
}

@detectDelim