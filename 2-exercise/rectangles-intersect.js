a = [3, 5, 11, 11];
b = [7, 2, 13, 7];
c = [11, 11, 15, 13];

aux = intersects(a, b);

console.log('Intersection: ' + aux);

function intersects(A, B) {

    var Ax1 = A[0];
    var Ax2 = A[2];
    var Ay1 = A[1];
    var Ay2 = A[3];

    var Bx1 = B[0];
    var Bx2 = B[2];
    var By1 = B[1];
    var By2 = B[3];

    //Case the user insert the points in a wrong order
    if (Ax2 < Ax1) {
        Ax2 = A[0];
        Ax1 = A[2];
    }
    if (Ay2 < Ay1) {
        Ay2 = A[1];
        Ay1 = A[3];
    }

    if (Bx2 < Bx1) {
        Bx2 = B[0];
        Bx1 = B[2];
    }
    if (By2 < By1) {
        By2 = B[1];
        By1 = B[3];
    }

    //////////////////////////////////////ANALYSIS ON THE X AXIS///////////////////////////////
    if (Ax2 >= Bx2) {
        if (Bx1 >= Ax1) {
            //B => Located inside A in X axis
            lx = (Bx2 - Bx1) + 1;
        }
        else //Bx1 < Ax1 B
        {
            if (Bx2 < Ax1) {  //B do not intercept A in x axis
                lx = 0;
            }
            else //Bx2 >= Ax1
            {
                if (Bx2 == Ax1) {
                    lx = 1;//Edges touches themselves on X axis
                }
                else {
                    //B => is located to the left o x axis
                    lx = (Bx2 - Ax1) + 1;
                }
            }
        }
    }
    else //Ax2 < Bx2
    {
        if (Ax1 >= Bx1) {
            //A => Is located inside B in x axis
            lx = (Ax2 - Ax1) + 1;
        }
        else //Bx1 < Ax1
        {
            if (Ax2 < Bx1)  //A do not intercept B in X axis
            {
                lx = 0;
            }
            else //Ax2 >= Bx1
            {
                if (Ax2 == Bx1) {
                    lx = 1; //Edges touches themselves on X axis
                }
                else {
                    //A => is located to the left o x axis
                    lx = (Ax2 - Bx1) + 1;
                }
            }
        }
    }

    //////////////////////////////////ANALYSIS ON THE Y AXIS///////////////////////////////
    if (Ay2 >= By2) {
        if (By1 >= Ay1) {
            //B => Inside A in Y
            ly = (By2 - By1) + 1;
        }
        else //By1 < Ay1 => B is located below A in axis Y
        {
            if (By2 < Ay1) //B do not intercept A in Y
            {
                ly = 0;
            }
            else //By2 >= Ay1
            {
                if (By2 == Ay1) {
                    ly = 1; //Edges touches themselves on Y axis
                }
                else {
                    //B => Lowest position on Y and intercepts A
                    ly = (By2 - Ay1) + 1;
                }
            }
        }
    }
    else //Ay2 < By2
    {
        if (Ay1 >= By1) {
            //A => Inside B in Y
            ly = (Ay2 - Ay1) + 1;
        }
        else //Ay1 < By1  => A is located below B in axis Y
        {
            if (Ay2 < By1) //B do not intercept A in Y
            {
                ly = 0;
            }
            else //Ay2 >= By1
            {
                if (Ay2 == By1) {
                    ly = 1;//Edges touches themselves on Y axis
                }
                else {
                    //A => Lowest position on Y and intercepts B
                    ly = (Ay2 - By1) + 1;
                }
            }
        }
    }

    if (lx == 0 || ly == 0) {
        r = false;
    }
    else {
        r = true;
    }

    return r;

}

