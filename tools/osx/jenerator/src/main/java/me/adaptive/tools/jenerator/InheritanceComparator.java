package me.adaptive.tools.jenerator;

import java.util.Comparator;

public class InheritanceComparator implements Comparator<Class> {

    @Override
    public int compare(Class o1, Class o2) {
        final Class c1 = (Class) o1;
        final Class c2 = (Class) o2;

        // Both are the same
        if (c1.equals(c2)) {
            return 0;
        }


        // Both Interfaces
        if (c1.isInterface() && c2.isInterface()) {
            // Is there inheritance between these interfaces?
            if (c1.isAssignableFrom(c2)) {
                return -1;
            } else {
                if (c1.getInterfaces().length == 0 && c2.getInterfaces().length == 0) {
                    return c1.getName().compareTo(c2.getName());
                } else if (c1.getInterfaces().length > 0 && c2.getInterfaces().length > 0) {
                    if (c1.getInterfaces()[0].equals(c2.getInterfaces()[0])) {
                        return c1.getName().compareTo(c2.getName());
                    } else {
                        return this.compare(c1.getInterfaces()[0], c2.getInterfaces()[0]);
                    }
                } else if (c1.getInterfaces().length == 0 && c2.getInterfaces().length > 0) {
                    return -1;
                } else {
                    return 1;
                }
            }
        }

        // Both Classes
        if (!c1.isInterface() && !c2.isInterface()) {
            // Is there inheritance between these classes?
            if (c1.isAssignableFrom(c2)) {
                return -1;
            } else {
                if (c1.getSuperclass().equals(Object.class) && c2.getSuperclass().equals(Object.class)) {
                    return c1.getName().compareTo(c2.getName());
                } else if (!c1.getSuperclass().equals(Object.class) && !c2.getSuperclass().equals(Object.class)) {
                    if (c1.getSuperclass().equals(c2.getSuperclass())) {
                        return c1.getName().compareTo(c2.getName());
                    } else {
                        return this.compare(c1.getSuperclass(), c2.getSuperclass());
                    }
                } else if (c1.getSuperclass().equals(Object.class) && !c2.getSuperclass().equals(Object.class)) {
                    return -1;
                } else {
                    return 1;
                }
            }
        }

        // Interfaces always go before classes.
        if (c1.isInterface() && !c2.isInterface()) {
            return 1;
        } else {
            return -1;
        }

    }
}