function genAnswer(){
  const posVarName = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")
  const functionNames = [
    "findEvenNumbers",
    "getEvenInRange",
    "evenNumbersBetween",
    "detectEven",
    "evenInRange",
    "extractEven",
    "evenFinder",
    "findEvenInRange",
    "evenBetween",
    "evenInRangeDetector"
  ];
  let functionName = functionNames[Math.floor(Math.random()*functionNames.length)];
  let varNameGlobalA = posVarName[Math.floor(Math.random()*posVarName.length)]
  let varNameGlobalB = posVarName[Math.floor(Math.random()*posVarName.length)]
  let varNameGlobalI = posVarName[Math.floor(Math.random()*posVarName.length)]
  let varNameGlobalT = posVarName[Math.floor(Math.random()*posVarName.length)]
  let varNameGlobalX = posVarName[Math.floor(Math.random()*posVarName.length)]
  let varNameGlobalY = posVarName[Math.floor(Math.random()*posVarName.length)]


  let posWay = [`    ${varNameGlobalI} ⟸ ${varNameGlobalX}
        Do:
          If ( (${varNameGlobalI} mod 2) = 0 ) then:
            write(${varNameGlobalI})
          Endif
          ${varNameGlobalI} ⟸ ${varNameGlobalI}+1
        while( ${varNameGlobalI} ≤ ${varNameGlobalY} )`,
  `For ${varNameGlobalI} ⟸ ${varNameGlobalX} to ${varNameGlobalY} :
          If ( (${varNameGlobalI} mod 2) = 0 ) then:
            write(${varNameGlobalI})
          Endif
        Endfor`,
  `    ${varNameGlobalI} ⟸ ${varNameGlobalX}  
        while( ${varNameGlobalI} ≤ ${varNameGlobalY} ):
          If ( (${varNameGlobalI} mod 2) = 0 ) then:
            write(${varNameGlobalI})
          Endif
          ${varNameGlobalI} ⟸ ${varNameGlobalI}+1
        EndWhile`]
  let qest1 = [`Please enter ${varNameGlobalA}:`,"Please enter N1",`enter ${varNameGlobalA}:`,"enter first limit",`Donne ${varNameGlobalA}:`]
  let qest2 = [`Please enter ${varNameGlobalB}:`,"Please enter N2",`enter ${varNameGlobalB}:`,"enter second limit",`Donne ${varNameGlobalB}:`]
  let rng = Math.floor(Math.random()*qest1.length)

  document.querySelector("#answerArea").textContent = `
  Algorithm ${functionName+"Algo"}
    Variables:
      ${varNameGlobalA},${varNameGlobalB}:integers
    Procedure ${functionName}(${varNameGlobalX}:integer,${varNameGlobalY}:integer):
      Variables:
        ${varNameGlobalI},${varNameGlobalT}:integer
      Begin:
        If (${varNameGlobalX}>${varNameGlobalY}) then:
          ${varNameGlobalT} ⟸ ${varNameGlobalX}
          ${varNameGlobalX} ⟸ ${varNameGlobalY}
          ${varNameGlobalY} ⟸ ${varNameGlobalT}
        Endif
        ${posWay[Math.floor(Math.random()*posWay.length)]}
      End
    EndProcedure
    Begin
      write("${qest1[rng]}")
      read(${varNameGlobalA})
      write("${qest2[rng]}")
      read(${varNameGlobalB})
      findEvenNumbers(${varNameGlobalA},${varNameGlobalB})
    End
  `
}


document.querySelector("#genbtn").addEventListener("click",()=>genAnswer())
